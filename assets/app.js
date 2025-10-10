(function(){
  const navEl = document.getElementById('nav');
  const articleEl = document.getElementById('article');
  const searchEl = document.getElementById('search');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const sidebar = document.getElementById('sidebar');
  const backToTop = document.getElementById('backToTop');
  const readingProgress = document.querySelector('.reading-progress');
const tocToggle = document.getElementById('tocToggle');
const toc = document.getElementById('toc');
const tocList = document.getElementById('tocList');
const printButton = document.getElementById('printButton');
const editButton = document.getElementById('editButton');
const editMode = document.getElementById('editMode');
const editTextarea = document.getElementById('editTextarea');
const saveButton = document.getElementById('saveButton');
const cancelButton = document.getElementById('cancelButton');
const syncButton = document.getElementById('syncButton');
const syncModal = document.getElementById('syncModal');
const syncRepo = document.getElementById('syncRepo');
const syncBranch = document.getElementById('syncBranch');
const syncAuto = document.getElementById('syncAuto');
const syncLast = document.getElementById('syncLast');
const syncStatusText = document.getElementById('syncStatusText');
const syncManualButton = document.getElementById('syncManualButton');
const syncConfigButton = document.getElementById('syncConfigButton');
const cancelSyncButton = document.getElementById('cancelSyncButton');

  let baseAliasMap = {};
  let isMobileMenuOpen = false;
  let currentTheme = localStorage.getItem('theme') || 'dark';
  let searchIndex = new Map(); // path -> content for full-text search
  let isTocOpen = false;
  let contentCache = new Map(); // path -> content cache
  let isLoading = false;
  let analytics = {
    pageViews: new Map(), // path -> count
    searchQueries: [],
    themeUsage: { light: 0, dark: 0 },
    lastVisit: localStorage.getItem('lastVisit') || null
  };
  let isEditMode = false;
  let currentEditPath = null;
  let originalContent = '';

  function createNav(manifest){
    navEl.innerHTML='';
    // Build alias map: map unbracketed name -> bracketed base from manifest
    baseAliasMap = {};
    for(const group of manifest){
      const groupEl = document.createElement('div');
      groupEl.className = 'group';

      const titleEl = document.createElement('div');
      titleEl.className = 'group-title';
      titleEl.innerHTML = `
        <span>${group.title}</span>
        <span class="group-toggle" aria-hidden="true">▶</span>
      `;
      titleEl.style.cursor = 'pointer';
      titleEl.style.display = 'flex';
      titleEl.style.justifyContent = 'space-between';
      titleEl.style.alignItems = 'center';
      titleEl.setAttribute('role', 'button');
      titleEl.setAttribute('tabindex', '0');
      titleEl.setAttribute('aria-expanded', 'false');
      titleEl.setAttribute('aria-label', `Toggle ${group.title} section`);
      groupEl.appendChild(titleEl);

      const filesEl = document.createElement('div');
      filesEl.className = 'group-files';
      filesEl.style.display = 'none';

      if(typeof group.base === 'string'){
        const bracketed = group.base;
        const unbracketed = bracketed.replace(/^\[|\]$/g, '');
        baseAliasMap[unbracketed] = bracketed;
        baseAliasMap[bracketed] = bracketed;
      }

      for(const f of group.files){
        const a = document.createElement('a');
        a.className = 'file';
        a.href = `#/${encodeURIComponent(f.path)}`;
        a.textContent = f.name;
        a.dataset.path = f.path;
        a.setAttribute('role', 'menuitem');
        a.setAttribute('aria-label', `Open ${f.name} cheatsheet`);
        filesEl.appendChild(a);
      }

      groupEl.appendChild(filesEl);

      // Toggle functionality
      const toggleGroup = () => {
        const isCollapsed = filesEl.style.display === 'none';
        filesEl.style.display = isCollapsed ? 'block' : 'none';
        const toggle = titleEl.querySelector('.group-toggle');
        toggle.textContent = isCollapsed ? '▼' : '▶';
        titleEl.setAttribute('aria-expanded', !isCollapsed);
      };

      titleEl.addEventListener('click', toggleGroup);
      titleEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleGroup();
        }
      });

      navEl.appendChild(groupEl);
    }
  }

  function setActive(path){
    document.querySelectorAll('.file').forEach(el=>{
      el.classList.toggle('active', el.dataset.path === path);
    });
  }

  function encodePathForFetch(path){
    // Encode each segment to safely handle +, #, spaces, etc.
    return path.split('/').map(encodeURIComponent).join('/');
  }

  function normalizeBaseBrackets(path){
    const segments = path.split('/');
    if(segments.length === 0) return path;
    const first = segments[0];
    if(baseAliasMap[first]){
      segments[0] = baseAliasMap[first];
      return segments.join('/');
    }
    // Also try if first without brackets maps to a bracketed base
    const unbr = first.replace(/^\[|\]$/g, '');
    if(baseAliasMap[unbr]){
      segments[0] = baseAliasMap[unbr];
      return segments.join('/');
    }
    return path;
  }

  async function tryFetch(path){
    const normalized = normalizeBaseBrackets(path);
    const segs = normalized.split('/');
    const first = segs[0] || '';
    const unbrFirst = first.replace(/^\[(.*)\]$/, '$1');
    const unbrPath = (()=>{ const s=[...segs]; s[0]=unbrFirst; return s.join('/'); })();
    
    // Try API endpoints first, then fallback to direct file access
    const apiVariants = [
      `/api/files/read/${encodeURIComponent(normalized)}`,
      `/api/files/read/${encodeURIComponent(unbrPath)}`
    ];
    
    for(const url of apiVariants){
      try{
        const res = await fetch(url, { credentials: 'include' });
        if(res.ok) {
          const data = await res.json();
          if(data.success) {
            // Return a Response-like object with the content
            return {
              ok: true,
              text: () => Promise.resolve(data.content)
            };
          }
        }
      }catch(_){}
    }
    
    // Fallback to direct file access (for static hosting)
    const directVariants = [normalized, unbrPath];
    for(const filePath of directVariants){
      try{
        const res = await fetch(filePath);
        if(res.ok) return res;
      }catch(_){}
    }
    
    throw new Error('All fetch variants failed');
  }

  async function loadFile(path){
    // Prevent multiple simultaneous loads
    if (isLoading) return;
    isLoading = true;
    
    // Store current path for edit mode
    articleEl.dataset.currentPath = path;
    
    // Check cache first
    if (contentCache.has(path)) {
      const cachedContent = contentCache.get(path);
      articleEl.innerHTML = cachedContent;
      setActive(path);
      
      // Generate TOC for cached content
      setTimeout(() => {
        generateTOC();
        updateActiveTOCItem();
        addCopyButtons(); // Add copy buttons to new content
      }, 50);
      
      isLoading = false;
      return;
    }
    
    // Show loading state
    articleEl.classList.add('loading');
    
    try{
      const res = await tryFetch(path);
      const isMarkdown = /\.md$/i.test(path);
      const isText = /\.(txt|sh)$/i.test(path);
      let content = '';
      
      if(isMarkdown || isText){
        const raw = await res.text();
        content = isMarkdown ? marked.parse(raw) : `<pre><code>${escapeHtml(raw)}</code></pre>`;
        
        // Cache the content
        contentCache.set(path, content);
        
        articleEl.innerHTML = content;
        
        // Use requestIdleCallback for syntax highlighting if available
        if (window.requestIdleCallback) {
          requestIdleCallback(() => {
            document.querySelectorAll('pre code').forEach(block => hljs.highlightElement(block));
          });
        } else {
          setTimeout(() => {
            document.querySelectorAll('pre code').forEach(block => hljs.highlightElement(block));
          }, 0);
        }
        
        // Generate TOC after content is loaded
        setTimeout(() => {
          generateTOC();
          updateActiveTOCItem();
          addCopyButtons(); // Add copy buttons to new content
        }, 100);
      }else if(/\.(png|jpg|jpeg|gif|webp)$/i.test(path)){
        content = `<img src="${`/raw?path=${encodeURIComponent(path)}`}" alt="${path}" loading="lazy" />`;
        articleEl.innerHTML = content;
        contentCache.set(path, content);
        // Hide TOC for images
        toc.style.display = 'none';
        tocToggle.style.display = 'none';
      }else{
        const raw = await res.text();
        content = `<pre><code>${escapeHtml(raw)}</code></pre>`;
        articleEl.innerHTML = content;
        contentCache.set(path, content);
        // Hide TOC for code files
        toc.style.display = 'none';
        tocToggle.style.display = 'none';
      }
      setActive(path);
      trackPageView(path); // Track page view
    }catch(e){
      const errorContent = `<p>Unable to load <code>${path}</code>.</p>`;
      articleEl.innerHTML = errorContent;
      // Hide TOC for error states
      toc.style.display = 'none';
      tocToggle.style.display = 'none';
    } finally {
      // Remove loading state
      articleEl.classList.remove('loading');
      isLoading = false;
    }
  }

  function escapeHtml(s){
    return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
  }

  function handleRoute(){
    const hash = location.hash.replace(/^#\//,'');
    const path = decodeURIComponent(hash || 'README.md');
    loadFile(path);
  }

  async function buildSearchIndex() {
    // Build search index from manifest with batching for better performance
    const manifest = window.CS_MANIFEST || [];
    const batchSize = 3; // Process 3 files at a time
    
    for (const group of manifest) {
      const files = group.files;
      
      for (let i = 0; i < files.length; i += batchSize) {
        const batch = files.slice(i, i + batchSize);
        
        // Process batch in parallel
        const promises = batch.map(async (file) => {
          try {
            const res = await tryFetch(file.path);
            if (res.ok) {
              const content = await res.text();
              // Store content for search, removing markdown syntax
              const cleanContent = content
                .replace(/#{1,6}\s+/g, '') // Remove headers
                .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
                .replace(/\*(.*?)\*/g, '$1') // Remove italic
                .replace(/`(.*?)`/g, '$1') // Remove inline code
                .replace(/```[\s\S]*?```/g, '') // Remove code blocks
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
                .toLowerCase();
              searchIndex.set(file.path, cleanContent);
            }
          } catch (e) {
            // Ignore files that can't be loaded
          }
        });
        
        await Promise.all(promises);
        
        // Small delay between batches to prevent overwhelming the server
        if (i + batchSize < files.length) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    }
  }

  function installSearch(){
    searchEl.addEventListener('input', ()=>{
      const q = searchEl.value.toLowerCase().trim();
      
      // Track search queries
      if (q.length > 2) {
        trackSearch(q);
      }
      
      if (q === '') {
        // Show all files when search is empty
        document.querySelectorAll('.group').forEach(group => {
          group.style.display = '';
          const filesEl = group.querySelector('.group-files');
          filesEl.querySelectorAll('.file').forEach(a => {
            a.style.display = '';
          });
        });
        return;
      }

      document.querySelectorAll('.group').forEach(group => {
        let anyVisible = false;
        const filesEl = group.querySelector('.group-files');
        
        filesEl.querySelectorAll('.file').forEach(a => {
          const path = a.dataset.path;
          const fileName = a.textContent.toLowerCase();
          const fileContent = searchIndex.get(path) || '';
          
          // Search in filename and content
          const visible = fileName.includes(q) || fileContent.includes(q);
          a.style.display = visible ? '' : 'none';
          
          if (visible) {
            anyVisible = true;
            // Highlight search terms in filename
            if (fileName.includes(q)) {
              const highlightedName = a.textContent.replace(
                new RegExp(`(${q})`, 'gi'), 
                '<mark>$1</mark>'
              );
              a.innerHTML = highlightedName;
            }
          } else {
            // Reset highlighting when not visible
            a.innerHTML = a.textContent;
          }
        });
        
        group.style.display = anyVisible ? '' : 'none';
        
        // Auto-expand groups with matches
        if (anyVisible) {
          filesEl.style.display = 'block';
          const toggle = group.querySelector('.group-toggle');
          if (toggle) toggle.textContent = '▼';
        }
      });
    });
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    sidebar.classList.toggle('open', isMobileMenuOpen);
    mobileOverlay.classList.toggle('active', isMobileMenuOpen);
    mobileOverlay.style.display = isMobileMenuOpen ? 'block' : 'none';
    
    // Update button icon
    const icon = mobileMenuToggle.querySelector('svg');
    if (isMobileMenuOpen) {
      icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
    } else {
      icon.innerHTML = '<line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
    }
  }

  function closeMobileMenu() {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  }


  function updateReadingProgress() {
    const article = document.querySelector('.article');
    if (!article) return;
    
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    readingProgress.style.width = scrollPercent + '%';
  }

  function updateBackToTopButton() {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function installMobileNavigation() {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    mobileOverlay.addEventListener('click', closeMobileMenu);
    backToTop.addEventListener('click', scrollToTop);
    
    // Close mobile menu when clicking on navigation items
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('file') && isMobileMenuOpen) {
        closeMobileMenu();
      }
    });
  }

  function installScrollHandlers() {
    window.addEventListener('scroll', () => {
      updateReadingProgress();
      updateBackToTopButton();
    });
  }


  function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }


  function printContent() {
    // Close any open overlays
    if (isMobileMenuOpen) closeMobileMenu();
    if (isTocOpen) toggleTOC();
    
    // Add print header with current page info
    const currentPath = location.hash.replace(/^#\//, '');
    const currentFile = currentPath ? decodeURIComponent(currentPath) : 'README.md';
    const printHeader = document.createElement('div');
    printHeader.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: white;
      color: black;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      font-size: 12px;
      z-index: 9999;
      display: none;
    `;
    printHeader.innerHTML = `
      <strong>Senior Dev Cheatsheet</strong> - ${currentFile} - Printed on ${new Date().toLocaleDateString()}
    `;
    
    // Show header only in print
    const printStyles = document.createElement('style');
    printStyles.textContent = `
      @media print {
        .print-header { display: block !important; }
        body { padding-top: 40px; }
      }
    `;
    
    document.head.appendChild(printStyles);
    document.body.appendChild(printHeader);
    printHeader.classList.add('print-header');
    
    // Trigger print
    window.print();
    
    // Clean up after print
    setTimeout(() => {
      document.head.removeChild(printStyles);
      document.body.removeChild(printHeader);
    }, 1000);
  }

  function installPrintButton() {
    printButton.addEventListener('click', printContent);
  }

  async function enterEditMode() {
    if (!currentEditPath) return;
    
    isEditMode = true;
    editMode.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    try {
      // Load current content into textarea using API
      const response = await fetch(`/api/files/read/${encodeURIComponent(currentEditPath)}`, {
        credentials: 'include'
      });
      const data = await response.json();
      
      if (data.success) {
        originalContent = data.content;
        editTextarea.value = data.content;
        editTextarea.focus();
      } else {
        showMessage(data.message || 'Failed to load file for editing', 'error');
        exitEditMode();
      }
    } catch (error) {
      console.error('Failed to load content for editing:', error);
      showMessage('Failed to load file. Make sure the server is running.', 'error');
      exitEditMode();
    }
  }

  function exitEditMode() {
    isEditMode = false;
    editMode.classList.remove('active');
    document.body.style.overflow = '';
    editTextarea.value = '';
    currentEditPath = null;
    originalContent = '';
  }

  async function saveContent() {
    if (!currentEditPath || !editTextarea.value) return;
    
    const newContent = editTextarea.value;
    
    try {
      const response = await fetch(`/api/files/write/${encodeURIComponent(currentEditPath)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ content: newContent })
      });
      
      const data = await response.json();
      if (data.success) {
        showMessage('File saved successfully!', 'success');
        // Clear cache for this file
        contentCache.delete(currentEditPath);
        // Update the displayed content
        loadFile(currentEditPath);
        exitEditMode();
      } else {
        showMessage(data.message || 'Failed to save file', 'error');
      }
    } catch (error) {
      console.error('Save error:', error);
      showMessage('Failed to save file. Make sure the server is running.', 'error');
    }
  }


  function showMessage(message, type = 'info') {
    const messageEl = document.createElement('div');
    messageEl.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: ${type === 'success' ? 'var(--accent)' : type === 'error' ? '#dc2626' : 'var(--surface)'};
      color: white;
      padding: 12px 24px;
      border-radius: var(--radius-sm);
      z-index: 3000;
      font-weight: 500;
      box-shadow: var(--shadow);
    `;
    messageEl.textContent = message;
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
      if (document.body.contains(messageEl)) {
        document.body.removeChild(messageEl);
      }
    }, 3000);
  }

  // GitHub Sync Functions
  async function fetchSyncStatus() {
    try {
      const response = await fetch('/api/sync/status');
      const data = await response.json();
      
      if (data.success) {
        updateSyncUI(data.status, data.config);
        return data;
      } else {
        console.error('Failed to fetch sync status:', data.message);
        return null;
      }
    } catch (error) {
      console.error('Error fetching sync status:', error);
      return null;
    }
  }

  function updateSyncUI(status, config) {
    if (syncRepo) syncRepo.textContent = config.repo || 'Not configured';
    if (syncBranch) syncBranch.textContent = config.branch || 'main';
    if (syncAuto) syncAuto.textContent = config.auto_sync_enabled ? 'Enabled' : 'Disabled';
    if (syncLast) {
      if (status.last_sync) {
        const date = new Date(status.last_sync);
        syncLast.textContent = date.toLocaleString();
      } else {
        syncLast.textContent = 'Never';
      }
    }
    if (syncStatusText) {
      syncStatusText.textContent = status.message || 'Idle';
      syncStatusText.className = `sync-value sync-${status.status}`;
    }
  }

  async function triggerManualSync() {
    if (syncManualButton) {
      syncManualButton.disabled = true;
      syncManualButton.textContent = 'Syncing...';
    }
    
    if (syncButton) {
      syncButton.classList.add('syncing');
    }

    try {
      const response = await fetch('/api/sync/manual', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        showMessage('Sync started successfully', 'success');
        
        // Poll for status updates
        const pollInterval = setInterval(async () => {
          const statusData = await fetchSyncStatus();
          if (statusData && statusData.status.status === 'idle') {
            clearInterval(pollInterval);
            showMessage('Sync completed successfully', 'success');
          }
        }, 1000);
        
        // Stop polling after 30 seconds
        setTimeout(() => {
          clearInterval(pollInterval);
        }, 30000);
        
      } else {
        showMessage(data.message || 'Sync failed', 'error');
      }
    } catch (error) {
      console.error('Error triggering sync:', error);
      showMessage('Failed to start sync', 'error');
    } finally {
      if (syncManualButton) {
        syncManualButton.disabled = false;
        syncManualButton.textContent = 'Sync Now';
      }
      
      if (syncButton) {
        syncButton.classList.remove('syncing');
      }
    }
  }

  function showSyncModal() {
    if (syncModal) {
      syncModal.classList.add('show');
      fetchSyncStatus();
    }
  }

  function hideSyncModal() {
    if (syncModal) {
      syncModal.classList.remove('show');
    }
  }

  // Copy to Clipboard functionality
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
      } catch (err) {
        document.body.removeChild(textArea);
        return false;
      }
    }
  }

  function addCopyButtons() {
    // Find all code blocks
    const codeBlocks = document.querySelectorAll('pre code, .hljs');
    
    codeBlocks.forEach((codeBlock, index) => {
      // Skip if already has copy button
      if (codeBlock.parentElement.querySelector('.copy-button')) {
        return;
      }
      
      const pre = codeBlock.parentElement;
      if (!pre || pre.tagName !== 'PRE') return;
      
      // Create copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.textContent = 'Copy';
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');
      
      // Add click handler
      copyButton.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const codeText = codeBlock.textContent || codeBlock.innerText;
        
        const success = await copyToClipboard(codeText);
        
        if (success) {
          copyButton.classList.add('copied');
          copyButton.textContent = 'Copied!';
          showMessage('Code copied to clipboard!', 'success');
          
          // Reset button after 2 seconds
          setTimeout(() => {
            copyButton.classList.remove('copied');
            copyButton.textContent = 'Copy';
          }, 2000);
        } else {
          showMessage('Failed to copy code', 'error');
        }
      });
      
      // Add button to pre element
      pre.appendChild(copyButton);
    });
  }

  function installCopyToClipboard() {
    // Add copy buttons when content loads
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Check if any added nodes contain code blocks
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (node.tagName === 'PRE' || node.querySelector('pre')) {
                setTimeout(addCopyButtons, 100); // Small delay to ensure DOM is ready
              }
            }
          });
        }
      });
    });
    
    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Add copy buttons to existing code blocks
    setTimeout(addCopyButtons, 500);
  }

  function installEditMode() {
    editButton.addEventListener('click', () => {
      if (isEditMode) {
        exitEditMode();
        return;
      }
      
      // Get current file path from the article
      const article = document.getElementById('article');
      const currentPath = article.dataset.currentPath;
      
      if (!currentPath) {
        showMessage('No file is currently loaded for editing.', 'error');
        return;
      }
      
      currentEditPath = currentPath;
      enterEditMode();
    });
    
    saveButton.addEventListener('click', saveContent);
    cancelButton.addEventListener('click', exitEditMode);
    
    // Keyboard shortcuts for edit mode
    editTextarea.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 's') {
          e.preventDefault();
          saveContent();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          exitEditMode();
        }
      }
    });
  }

  function installSyncMode() {
    if (syncButton) {
      syncButton.addEventListener('click', showSyncModal);
    }

    if (syncManualButton) {
      syncManualButton.addEventListener('click', triggerManualSync);
    }

    if (cancelSyncButton) {
      cancelSyncButton.addEventListener('click', hideSyncModal);
    }

    // Close sync modal on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && syncModal && syncModal.classList.contains('show')) {
        hideSyncModal();
      }
    });

    // Close sync modal on background click
    if (syncModal) {
      syncModal.addEventListener('click', (e) => {
        if (e.target === syncModal) {
          hideSyncModal();
        }
      });
    }
  }

  function trackPageView(path) {
    const currentCount = analytics.pageViews.get(path) || 0;
    analytics.pageViews.set(path, currentCount + 1);
    
    // Save to localStorage periodically
    if (analytics.pageViews.size % 5 === 0) {
      saveAnalytics();
    }
  }

  function trackSearch(query) {
    if (query.trim().length > 2) {
      analytics.searchQueries.push({
        query: query,
        timestamp: Date.now()
      });
      
      // Keep only last 50 searches
      if (analytics.searchQueries.length > 50) {
        analytics.searchQueries = analytics.searchQueries.slice(-50);
      }
    }
  }

  function trackThemeChange(theme) {
    analytics.themeUsage[theme]++;
    saveAnalytics();
  }

  function saveAnalytics() {
    try {
      const analyticsData = {
        pageViews: Object.fromEntries(analytics.pageViews),
        searchQueries: analytics.searchQueries.slice(-20), // Keep last 20
        themeUsage: analytics.themeUsage,
        lastVisit: Date.now()
      };
      localStorage.setItem('cheatsheet_analytics', JSON.stringify(analyticsData));
    } catch (e) {
      // Ignore storage errors
    }
  }

  function loadAnalytics() {
    try {
      const saved = localStorage.getItem('cheatsheet_analytics');
      if (saved) {
        const data = JSON.parse(saved);
        analytics.pageViews = new Map(Object.entries(data.pageViews || {}));
        analytics.searchQueries = data.searchQueries || [];
        analytics.themeUsage = data.themeUsage || { light: 0, dark: 0 };
        analytics.lastVisit = data.lastVisit;
      }
    } catch (e) {
      // Ignore parsing errors
    }
  }

  function getPopularContent() {
    const sorted = Array.from(analytics.pageViews.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    return sorted;
  }

  function generateTOC() {
    const headings = articleEl.querySelectorAll('h1, h2, h3, h4, h5, h6');
    tocList.innerHTML = '';
    
    if (headings.length === 0) {
      toc.style.display = 'none';
      tocToggle.style.display = 'none';
      return;
    }
    
    toc.style.display = 'block';
    tocToggle.style.display = 'block';
    
    headings.forEach((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      
      const li = document.createElement('li');
      li.className = 'toc-item';
      
      const a = document.createElement('a');
      a.href = `#${id}`;
      a.className = `toc-link ${heading.tagName.toLowerCase()}`;
      a.textContent = heading.textContent;
      
      a.addEventListener('click', (e) => {
        e.preventDefault();
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        updateActiveTOCItem();
      });
      
      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  function updateActiveTOCItem() {
    const headings = articleEl.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const tocLinks = tocList.querySelectorAll('.toc-link');
    
    let activeIndex = -1;
    const scrollTop = window.pageYOffset + 100; // Offset for better UX
    
    headings.forEach((heading, index) => {
      if (heading.offsetTop <= scrollTop) {
        activeIndex = index;
      }
    });
    
    tocLinks.forEach((link, index) => {
      link.classList.toggle('active', index === activeIndex);
    });
  }

  function toggleTOC() {
    isTocOpen = !isTocOpen;
    toc.classList.toggle('visible', isTocOpen);
  }

  function installTOC() {
    tocToggle.addEventListener('click', toggleTOC);
    
    // Close TOC when clicking outside
    document.addEventListener('click', (e) => {
      if (isTocOpen && !toc.contains(e.target) && !tocToggle.contains(e.target)) {
        toggleTOC();
      }
    });
    
    // Update active TOC item on scroll
    window.addEventListener('scroll', updateActiveTOCItem);
  }

  function installKeyboardShortcuts(){
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K to focus search
      if((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchEl.focus();
        searchEl.select();
      }
      
      // Escape to clear search, close mobile menu, close TOC, or exit edit mode
      if(e.key === 'Escape') {
        if (isEditMode) {
          exitEditMode();
        } else if (document.activeElement === searchEl) {
          searchEl.value = '';
          searchEl.dispatchEvent(new Event('input'));
          searchEl.blur();
        } else if (isMobileMenuOpen) {
          closeMobileMenu();
        } else if (isTocOpen) {
          toggleTOC();
        }
      }
      
      // Arrow keys for navigation (only when search is focused)
      if((e.key === 'ArrowDown' || e.key === 'ArrowUp') && document.activeElement === searchEl) {
        const files = Array.from(document.querySelectorAll('.file:not([style*="display: none"])'));
        const active = document.querySelector('.file.active');
        if(files.length === 0) return;
        
        e.preventDefault();
        let currentIndex = active ? files.indexOf(active) : -1;
        
        if(e.key === 'ArrowDown') {
          currentIndex = (currentIndex + 1) % files.length;
        } else {
          currentIndex = currentIndex <= 0 ? files.length - 1 : currentIndex - 1;
        }
        
        files[currentIndex].click();
        files[currentIndex].scrollIntoView({ block: 'nearest' });
      }
      
      // T key to toggle TOC
      if(e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          toggleTOC();
        }
      }
      
      // E key to toggle edit mode
      if(e.key === 'e' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          if (isEditMode) {
            exitEditMode();
          } else {
            const article = document.getElementById('article');
            const currentPath = article.dataset.currentPath;
            if (currentPath) {
              currentEditPath = currentPath;
              enterEditMode();
            } else {
              alert('No file is currently loaded for editing.');
            }
          }
        }
      }
      
      // Ctrl/Cmd + P to print
      if((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printContent();
      }
    });
  }

  // init
  loadAnalytics(); // Load analytics data
  initializeTheme();
  createNav(window.CS_MANIFEST || []);
  installSearch();
  installKeyboardShortcuts();
  installMobileNavigation();
  installScrollHandlers();
  installTOC();
  installPrintButton();
  installEditMode();
  installSyncMode(); // Install GitHub sync functionality
  installCopyToClipboard(); // Install copy-to-clipboard functionality
  buildSearchIndex(); // Build search index in background
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
  
  // Show edit button immediately since no authentication is required
  if (editButton) {
    editButton.style.display = 'flex';
    editButton.style.visibility = 'visible';
    editButton.style.opacity = '1';
  }
  
  // Save analytics on page unload
  window.addEventListener('beforeunload', saveAnalytics);
})();


