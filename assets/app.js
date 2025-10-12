/**
 * Senior Dev Cheatsheet - Enhanced JavaScript Application
 * Modern, maintainable, and performant code
 */

class CheatsheetApp {
  constructor() {
    // DOM Elements
    this.elements = {
      nav: document.getElementById('nav'),
      article: document.getElementById('article'),
      search: document.getElementById('search'),
      mobileOverlay: document.getElementById('mobileOverlay'),
      sidebar: document.getElementById('sidebar'),
      backToTop: document.getElementById('backToTop'),
      readingProgress: document.querySelector('.reading-progress'),
      tocToggle: document.getElementById('tocToggle'),
      toc: document.getElementById('toc'),
      tocList: document.getElementById('tocList'),
      printButton: document.getElementById('printButton'),
      editButton: document.getElementById('editButton'),
      editMode: document.getElementById('editMode'),
      editTextarea: document.getElementById('editTextarea'),
      saveButton: document.getElementById('saveButton'),
      cancelButton: document.getElementById('cancelButton')
    };

    // State Management
    this.state = {
      baseAliasMap: new Map(),
      currentTheme: localStorage.getItem('theme') || 'dark',
      searchIndex: new Map(),
      isTocOpen: false,
      contentCache: new Map(),
      isLoading: false,
      isEditMode: false,
      currentEditPath: null,
      originalContent: '',
      manifest: window.CS_MANIFEST || []
    };

    // Analytics
    this.analytics = {
      pageViews: new Map(),
      searchQueries: [],
      themeUsage: { light: 0, dark: 0 },
      lastVisit: localStorage.getItem('lastVisit') || null
    };

    // Configuration
    this.config = {
      searchBatchSize: 3,
      cacheMaxSize: 50,
      searchDebounceMs: 300,
      scrollOffset: 100
    };

    // Debounced functions
    this.debouncedSearch = this.debounce(this.handleSearch.bind(this), this.config.searchDebounceMs);
    this.debouncedScroll = this.debounce(this.updateActiveTOCItem.bind(this), 100);

    this.init();
  }

  /**
   * Initialize the application
   */
  async init() {
    try {
      this.loadAnalytics();
      this.initializeTheme();
      this.createNavigation();
      this.installEventListeners();
      this.buildSearchIndex();
      this.handleRoute();
      
      // Show edit button
      this.showEditButton();
      
      console.log('Cheatsheet app initialized successfully');
    } catch (error) {
      console.error('Failed to initialize app:', error);
      this.showMessage('Failed to initialize application', 'error');
    }
  }

  /**
   * Create navigation from manifest
   */
  createNavigation() {
    if (!this.elements.nav) return;

    this.elements.nav.innerHTML = '';
    this.state.baseAliasMap.clear();

    this.state.manifest.forEach(group => {
      const groupEl = this.createGroupElement(group);
      this.elements.nav.appendChild(groupEl);
    });
  }

  /**
   * Create a group element with proper accessibility
   */
  createGroupElement(group) {
    const groupEl = document.createElement('div');
    groupEl.className = 'group';

    // Create title element
    const titleEl = this.createGroupTitle(group.title);
    groupEl.appendChild(titleEl);

    // Create files container
    const filesEl = this.createFilesContainer(group.files);
    groupEl.appendChild(filesEl);

    // Build alias map
    if (typeof group.base === 'string') {
      const bracketed = group.base;
      const unbracketed = bracketed.replace(/^\[|\]$/g, '');
      this.state.baseAliasMap.set(unbracketed, bracketed);
      this.state.baseAliasMap.set(bracketed, bracketed);
    }

    // Add toggle functionality
    this.addGroupToggleFunctionality(titleEl, filesEl);

    return groupEl;
  }

  /**
   * Create group title element
   */
  createGroupTitle(title) {
    const titleEl = document.createElement('div');
    titleEl.className = 'group-title';
    titleEl.innerHTML = `
      <span>${this.escapeHtml(title)}</span>
      <span class="group-toggle" aria-hidden="true">▶</span>
    `;
    
    // Apply styles via CSS classes instead of inline styles
    titleEl.style.cursor = 'pointer';
    titleEl.style.display = 'flex';
    titleEl.style.justifyContent = 'space-between';
    titleEl.style.alignItems = 'center';
    
    // Accessibility attributes
    titleEl.setAttribute('role', 'button');
    titleEl.setAttribute('tabindex', '0');
    titleEl.setAttribute('aria-expanded', 'false');
    titleEl.setAttribute('aria-label', `Toggle ${title} section`);

    return titleEl;
  }

  /**
   * Create files container
   */
  createFilesContainer(files) {
    const filesEl = document.createElement('div');
    filesEl.className = 'group-files';
    filesEl.style.display = 'none';

    files.forEach(file => {
      const fileLink = this.createFileLink(file);
      filesEl.appendChild(fileLink);
    });

    return filesEl;
  }

  /**
   * Create file link element
   */
  createFileLink(file) {
    const link = document.createElement('a');
    link.className = 'file';
    link.href = `#/${encodeURIComponent(file.path)}`;
    link.textContent = file.name;
    link.dataset.path = file.path;
    link.setAttribute('role', 'menuitem');
    link.setAttribute('aria-label', `Open ${file.name} cheatsheet`);

    return link;
  }

  /**
   * Add group toggle functionality
   */
  addGroupToggleFunctionality(titleEl, filesEl) {
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
  }

  /**
   * Set active file in navigation
   */
  setActiveFile(path) {
    document.querySelectorAll('.file').forEach(el => {
      el.classList.toggle('active', el.dataset.path === path);
    });
  }

  /**
   * Normalize path with base brackets
   */
  normalizeBaseBrackets(path) {
    const segments = path.split('/');
    if (segments.length === 0) return path;

    const first = segments[0];
    if (this.state.baseAliasMap.has(first)) {
      segments[0] = this.state.baseAliasMap.get(first);
      return segments.join('/');
    }

    const unbr = first.replace(/^\[|\]$/g, '');
    if (this.state.baseAliasMap.has(unbr)) {
      segments[0] = this.state.baseAliasMap.get(unbr);
      return segments.join('/');
    }

    return path;
  }

  /**
   * Try to fetch content with multiple fallback strategies
   */
  async tryFetch(path) {
    const normalized = this.normalizeBaseBrackets(path);
    const segments = normalized.split('/');
    const first = segments[0] || '';
    const unbrFirst = first.replace(/^\[(.*)\]$/, '$1');
    const unbrPath = (() => {
      const s = [...segments];
      s[0] = unbrFirst;
      return s.join('/');
    })();

    // Try API endpoints first
    const apiVariants = [
      `/api/files/read/${encodeURIComponent(normalized)}`,
      `/api/files/read/${encodeURIComponent(unbrPath)}`
    ];

    for (const url of apiVariants) {
      try {
        const res = await fetch(url, { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            return {
              ok: true,
              text: () => Promise.resolve(data.content)
            };
          }
        }
      } catch (error) {
        console.warn(`API fetch failed for ${url}:`, error);
      }
    }

    // Fallback to direct file access
    const directVariants = [normalized, unbrPath];
    for (const filePath of directVariants) {
      try {
        const res = await fetch(filePath);
        if (res.ok) return res;
      } catch (error) {
        console.warn(`Direct fetch failed for ${filePath}:`, error);
      }
    }

    throw new Error(`Unable to fetch content for path: ${path}`);
  }

  /**
   * Load file content with caching and error handling
   */
  async loadFile(path) {
    if (this.state.isLoading) return;
    
    this.state.isLoading = true;
    this.elements.article.dataset.currentPath = path;

    try {
      // Check cache first
      if (this.state.contentCache.has(path)) {
        const cachedContent = this.state.contentCache.get(path);
        this.elements.article.innerHTML = cachedContent;
        this.setActiveFile(path);
        this.initializeContent();
        return;
      }

      // Show loading state
      this.elements.article.classList.add('loading');

      const res = await this.tryFetch(path);
      const content = await this.processFileContent(path, res);
      
      // Cache the content
      this.cacheContent(path, content);
      
      this.elements.article.innerHTML = content;
      this.setActiveFile(path);
      this.initializeContent();
      this.trackPageView(path);

    } catch (error) {
      console.error('Failed to load file:', error);
      this.showErrorContent(path, error.message);
    } finally {
      this.elements.article.classList.remove('loading');
      this.state.isLoading = false;
    }
  }

  /**
   * Process file content based on file type
   */
  async processFileContent(path, response) {
    const isMarkdown = /\.md$/i.test(path);
    const isText = /\.(txt|sh)$/i.test(path);
    const isImage = /\.(png|jpg|jpeg|gif|webp)$/i.test(path);

    if (isImage) {
      this.hideTOC();
      return `<img src="/raw?path=${encodeURIComponent(path)}" alt="${path}" loading="lazy" />`;
    }

    if (isMarkdown || isText) {
      const raw = await response.text();
      const content = isMarkdown ? marked.parse(raw) : `<pre><code>${this.escapeHtml(raw)}</code></pre>`;
      
      // Apply syntax highlighting asynchronously
      this.scheduleSyntaxHighlighting();
      return content;
    }

    // Default: treat as code
    this.hideTOC();
    const raw = await response.text();
    return `<pre><code>${this.escapeHtml(raw)}</code></pre>`;
  }

  /**
   * Schedule syntax highlighting for better performance
   */
  scheduleSyntaxHighlighting() {
    if (window.requestIdleCallback) {
      requestIdleCallback(() => {
        this.applySyntaxHighlighting();
      });
    } else {
      setTimeout(() => {
        this.applySyntaxHighlighting();
      }, 0);
    }
  }

  /**
   * Apply syntax highlighting to code blocks
   */
  applySyntaxHighlighting() {
    document.querySelectorAll('pre code').forEach(block => {
      if (typeof hljs !== 'undefined') {
        hljs.highlightElement(block);
      }
    });
  }

  /**
   * Cache content with size management
   */
  cacheContent(path, content) {
    // Implement LRU cache behavior
    if (this.state.contentCache.size >= this.config.cacheMaxSize) {
      const firstKey = this.state.contentCache.keys().next().value;
      this.state.contentCache.delete(firstKey);
    }
    
    this.state.contentCache.set(path, content);
  }

  /**
   * Show error content
   */
  showErrorContent(path, errorMessage) {
    const errorContent = `
      <div class="error-content">
        <h2>Unable to load content</h2>
        <p>Failed to load <code>${this.escapeHtml(path)}</code></p>
        <p class="error-message">${this.escapeHtml(errorMessage)}</p>
      </div>
    `;
    this.elements.article.innerHTML = errorContent;
    this.hideTOC();
  }

  /**
   * Hide TOC for non-content files
   */
  hideTOC() {
    if (this.elements.toc) this.elements.toc.style.display = 'none';
    if (this.elements.tocToggle) this.elements.tocToggle.style.display = 'none';
  }

  /**
   * Show TOC for content files
   */
  showTOC() {
    if (this.elements.toc) this.elements.toc.style.display = 'block';
    if (this.elements.tocToggle) this.elements.tocToggle.style.display = 'block';
  }

  /**
   * Initialize content after loading
   */
  initializeContent() {
    setTimeout(() => {
      this.generateTOC();
      this.updateActiveTOCItem();
      this.addCopyButtons();
    }, 100);
  }

  /**
   * Handle route changes
   */
  handleRoute() {
    const hash = location.hash.replace(/^#\//, '');
    const path = decodeURIComponent(hash || 'README.md');
    this.loadFile(path);
  }

  /**
   * Build search index with batching
   */
  async buildSearchIndex() {
    try {
      for (const group of this.state.manifest) {
        const files = group.files;
        
        for (let i = 0; i < files.length; i += this.config.searchBatchSize) {
          const batch = files.slice(i, i + this.config.searchBatchSize);
          
          const promises = batch.map(async (file) => {
            try {
              const res = await this.tryFetch(file.path);
              if (res.ok) {
                const content = await res.text();
                const cleanContent = this.cleanContentForSearch(content);
                this.state.searchIndex.set(file.path, cleanContent);
              }
            } catch (error) {
              console.warn(`Failed to index ${file.path}:`, error);
            }
          });
          
          await Promise.all(promises);
          
          // Small delay between batches
          if (i + this.config.searchBatchSize < files.length) {
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        }
      }
    } catch (error) {
      console.error('Failed to build search index:', error);
    }
  }

  /**
   * Clean content for search indexing
   */
  cleanContentForSearch(content) {
    return content
      .replace(/#{1,6}\s+/g, '') // Remove headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/`(.*?)`/g, '$1') // Remove inline code
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
      .toLowerCase();
  }

  /**
   * Handle search input with debouncing
   */
  handleSearch() {
    const query = this.elements.search.value.toLowerCase().trim();
    
    if (query.length > 2) {
      this.trackSearch(query);
    }

    if (query === '') {
      this.showAllFiles();
      return;
    }

    this.performSearch(query);
  }

  /**
   * Show all files (clear search)
   */
  showAllFiles() {
    document.querySelectorAll('.group').forEach(group => {
      group.style.display = '';
      const filesEl = group.querySelector('.group-files');
      filesEl.querySelectorAll('.file').forEach(a => {
        a.style.display = '';
        a.innerHTML = a.textContent; // Reset highlighting
      });
    });
  }

  /**
   * Perform search across files
   */
  performSearch(query) {
    document.querySelectorAll('.group').forEach(group => {
      let anyVisible = false;
      const filesEl = group.querySelector('.group-files');
      
      filesEl.querySelectorAll('.file').forEach(a => {
        const path = a.dataset.path;
        const fileName = a.textContent.toLowerCase();
        const fileContent = this.state.searchIndex.get(path) || '';
        
        const visible = fileName.includes(query) || fileContent.includes(query);
        a.style.display = visible ? '' : 'none';
        
        if (visible) {
          anyVisible = true;
          this.highlightSearchTerm(a, query);
        } else {
          a.innerHTML = a.textContent; // Reset highlighting
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
  }

  /**
   * Highlight search terms in filename
   */
  highlightSearchTerm(element, query) {
    const fileName = element.textContent;
    if (fileName.toLowerCase().includes(query)) {
      const highlightedName = fileName.replace(
        new RegExp(`(${this.escapeRegex(query)})`, 'gi'), 
        '<mark>$1</mark>'
      );
      element.innerHTML = highlightedName;
    }
  }

  /**
   * Escape regex special characters
   */
  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Update reading progress
   */
  updateReadingProgress() {
    if (!this.elements.readingProgress) return;
    
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
    
    this.elements.readingProgress.style.width = scrollPercent + '%';
  }

  /**
   * Update back to top button visibility
   */
  updateBackToTopButton() {
    if (!this.elements.backToTop) return;
    
    if (window.pageYOffset > 300) {
      this.elements.backToTop.classList.add('visible');
    } else {
      this.elements.backToTop.classList.remove('visible');
    }
  }

  /**
   * Scroll to top smoothly
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Initialize theme
   */
  initializeTheme() {
    document.documentElement.setAttribute('data-theme', this.state.currentTheme);
  }

  /**
   * Print content with header
   */
  printContent() {
    if (this.state.isTocOpen) this.toggleTOC();
    
    const currentPath = location.hash.replace(/^#\//, '');
    const currentFile = currentPath ? decodeURIComponent(currentPath) : 'README.md';
    
    this.addPrintHeader(currentFile);
    window.print();
    this.removePrintHeader();
  }

  /**
   * Add print header
   */
  addPrintHeader(currentFile) {
    const printHeader = document.createElement('div');
    printHeader.className = 'print-header';
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
      <strong>Senior Dev Cheatsheet</strong> - ${this.escapeHtml(currentFile)} - Printed on ${new Date().toLocaleDateString()}
    `;
    
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
    
    this.printStyles = printStyles;
    this.printHeader = printHeader;
  }

  /**
   * Remove print header
   */
  removePrintHeader() {
    setTimeout(() => {
      if (this.printStyles && document.head.contains(this.printStyles)) {
        document.head.removeChild(this.printStyles);
      }
      if (this.printHeader && document.body.contains(this.printHeader)) {
        document.body.removeChild(this.printHeader);
      }
    }, 1000);
  }

  /**
   * Enter edit mode
   */
  async enterEditMode() {
    if (!this.state.currentEditPath) return;
    
    this.state.isEditMode = true;
    this.elements.editMode.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    try {
      const response = await fetch(`/api/files/read/${encodeURIComponent(this.state.currentEditPath)}`, {
        credentials: 'include'
      });
      const data = await response.json();
      
      if (data.success) {
        this.state.originalContent = data.content;
        this.elements.editTextarea.value = data.content;
        this.elements.editTextarea.focus();
      } else {
        this.showMessage(data.message || 'Failed to load file for editing', 'error');
        this.exitEditMode();
      }
    } catch (error) {
      console.error('Failed to load content for editing:', error);
      this.showMessage('Failed to load file. Make sure the server is running.', 'error');
      this.exitEditMode();
    }
  }

  /**
   * Exit edit mode
   */
  exitEditMode() {
    this.state.isEditMode = false;
    this.elements.editMode.classList.remove('active');
    document.body.style.overflow = '';
    this.elements.editTextarea.value = '';
    this.state.currentEditPath = null;
    this.state.originalContent = '';
  }

  /**
   * Save content
   */
  async saveContent() {
    if (!this.state.currentEditPath || !this.elements.editTextarea.value) return;
    
    const newContent = this.elements.editTextarea.value;
    
    try {
      const response = await fetch(`/api/files/write/${encodeURIComponent(this.state.currentEditPath)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ content: newContent })
      });
      
      const data = await response.json();
      if (data.success) {
        this.showMessage('File saved successfully!', 'success');
        this.state.contentCache.delete(this.state.currentEditPath);
        this.loadFile(this.state.currentEditPath);
        this.exitEditMode();
      } else {
        this.showMessage(data.message || 'Failed to save file', 'error');
      }
    } catch (error) {
      console.error('Save error:', error);
      this.showMessage('Failed to save file. Make sure the server is running.', 'error');
    }
  }

  /**
   * Show message to user
   */
  showMessage(message, type = 'info') {
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${type}`;
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
      transition: opacity 0.3s ease;
    `;
    messageEl.textContent = message;
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
      if (document.body.contains(messageEl)) {
        messageEl.style.opacity = '0';
        setTimeout(() => {
          if (document.body.contains(messageEl)) {
            document.body.removeChild(messageEl);
          }
        }, 300);
      }
    }, 3000);
  }

  /**
   * Copy to clipboard with fallback
   */
  async copyToClipboard(text) {
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

  /**
   * Add copy buttons to code blocks
   */
  addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code, .hljs');
    
    codeBlocks.forEach((codeBlock) => {
      if (codeBlock.parentElement.querySelector('.copy-button')) {
        return;
      }
      
      const pre = codeBlock.parentElement;
      if (!pre || pre.tagName !== 'PRE') return;
      
      const copyButton = this.createCopyButton(codeBlock);
      pre.appendChild(copyButton);
    });
  }

  /**
   * Create copy button element
   */
  createCopyButton(codeBlock) {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    
    copyButton.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const codeText = codeBlock.textContent || codeBlock.innerText;
      const success = await this.copyToClipboard(codeText);
      
      if (success) {
        copyButton.classList.add('copied');
        copyButton.textContent = 'Copied!';
        this.showMessage('Code copied to clipboard!', 'success');
        
        setTimeout(() => {
          copyButton.classList.remove('copied');
          copyButton.textContent = 'Copy';
        }, 2000);
      } else {
        this.showMessage('Failed to copy code', 'error');
      }
    });
    
    return copyButton;
  }

  /**
   * Generate table of contents
   */
  generateTOC() {
    if (!this.elements.tocList) return;
    
    const headings = this.elements.article.querySelectorAll('h1, h2, h3, h4, h5, h6');
    this.elements.tocList.innerHTML = '';
    
    if (headings.length === 0) {
      this.hideTOC();
      return;
    }
    
    this.showTOC();
    
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
        this.updateActiveTOCItem();
      });
      
      li.appendChild(a);
      this.elements.tocList.appendChild(li);
    });
  }

  /**
   * Update active TOC item based on scroll position
   */
  updateActiveTOCItem() {
    if (!this.elements.tocList) return;
    
    const headings = this.elements.article.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const tocLinks = this.elements.tocList.querySelectorAll('.toc-link');
    
    let activeIndex = -1;
    const scrollTop = window.pageYOffset + this.config.scrollOffset;
    
    headings.forEach((heading, index) => {
      if (heading.offsetTop <= scrollTop) {
        activeIndex = index;
      }
    });
    
    tocLinks.forEach((link, index) => {
      link.classList.toggle('active', index === activeIndex);
    });
  }

  /**
   * Toggle TOC visibility
   */
  toggleTOC() {
    this.state.isTocOpen = !this.state.isTocOpen;
    this.elements.toc.classList.toggle('visible', this.state.isTocOpen);
  }

  /**
   * Show edit button
   */
  showEditButton() {
    if (this.elements.editButton) {
      this.elements.editButton.style.display = 'flex';
      this.elements.editButton.style.visibility = 'visible';
      this.elements.editButton.style.opacity = '1';
    }
  }

  /**
   * Track page view
   */
  trackPageView(path) {
    const currentCount = this.analytics.pageViews.get(path) || 0;
    this.analytics.pageViews.set(path, currentCount + 1);
    
    if (this.analytics.pageViews.size % 5 === 0) {
      this.saveAnalytics();
    }
  }

  /**
   * Track search query
   */
  trackSearch(query) {
    if (query.trim().length > 2) {
      this.analytics.searchQueries.push({
        query: query,
        timestamp: Date.now()
      });
      
      if (this.analytics.searchQueries.length > 50) {
        this.analytics.searchQueries = this.analytics.searchQueries.slice(-50);
      }
    }
  }

  /**
   * Track theme change
   */
  trackThemeChange(theme) {
    this.analytics.themeUsage[theme]++;
    this.saveAnalytics();
  }

  /**
   * Save analytics data
   */
  saveAnalytics() {
    try {
      const analyticsData = {
        pageViews: Object.fromEntries(this.analytics.pageViews),
        searchQueries: this.analytics.searchQueries.slice(-20),
        themeUsage: this.analytics.themeUsage,
        lastVisit: Date.now()
      };
      localStorage.setItem('cheatsheet_analytics', JSON.stringify(analyticsData));
    } catch (error) {
      console.warn('Failed to save analytics:', error);
    }
  }

  /**
   * Load analytics data
   */
  loadAnalytics() {
    try {
      const saved = localStorage.getItem('cheatsheet_analytics');
      if (saved) {
        const data = JSON.parse(saved);
        this.analytics.pageViews = new Map(Object.entries(data.pageViews || {}));
        this.analytics.searchQueries = data.searchQueries || [];
        this.analytics.themeUsage = data.themeUsage || { light: 0, dark: 0 };
        this.analytics.lastVisit = data.lastVisit;
      }
    } catch (error) {
      console.warn('Failed to load analytics:', error);
    }
  }

  /**
   * Install all event listeners
   */
  installEventListeners() {
    // Search
    if (this.elements.search) {
      this.elements.search.addEventListener('input', this.debouncedSearch);
    }

    // Scroll handlers
    window.addEventListener('scroll', () => {
      this.updateReadingProgress();
      this.updateBackToTopButton();
      this.debouncedScroll();
    });

    // Back to top
    if (this.elements.backToTop) {
      this.elements.backToTop.addEventListener('click', this.scrollToTop.bind(this));
    }

    // TOC toggle
    if (this.elements.tocToggle) {
      this.elements.tocToggle.addEventListener('click', this.toggleTOC.bind(this));
    }

    // Print button
    if (this.elements.printButton) {
      this.elements.printButton.addEventListener('click', this.printContent.bind(this));
    }

    // Edit mode
    if (this.elements.editButton) {
      this.elements.editButton.addEventListener('click', () => {
        if (this.state.isEditMode) {
          this.exitEditMode();
          return;
        }
        
        const currentPath = this.elements.article.dataset.currentPath;
        if (!currentPath) {
          this.showMessage('No file is currently loaded for editing.', 'error');
          return;
        }
        
        this.state.currentEditPath = currentPath;
        this.enterEditMode();
      });
    }

    if (this.elements.saveButton) {
      this.elements.saveButton.addEventListener('click', this.saveContent.bind(this));
    }

    if (this.elements.cancelButton) {
      this.elements.cancelButton.addEventListener('click', this.exitEditMode.bind(this));
    }

    // Keyboard shortcuts
    this.installKeyboardShortcuts();

    // Route handling
    window.addEventListener('hashchange', this.handleRoute.bind(this));

    // Copy to clipboard
    this.installCopyToClipboard();

    // TOC click outside
    document.addEventListener('click', (e) => {
      if (this.state.isTocOpen && 
          !this.elements.toc.contains(e.target) && 
          !this.elements.tocToggle.contains(e.target)) {
        this.toggleTOC();
      }
    });

    // Save analytics on unload
    window.addEventListener('beforeunload', this.saveAnalytics.bind(this));
  }

  /**
   * Install keyboard shortcuts
   */
  installKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.elements.search.focus();
        this.elements.search.select();
      }
      
      // Escape key handling
      if (e.key === 'Escape') {
        if (this.state.isEditMode) {
          this.exitEditMode();
        } else if (document.activeElement === this.elements.search) {
          this.elements.search.value = '';
          this.elements.search.dispatchEvent(new Event('input'));
          this.elements.search.blur();
        } else if (this.state.isTocOpen) {
          this.toggleTOC();
        }
      }
      
      // Arrow keys for navigation
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && 
          document.activeElement === this.elements.search) {
        this.handleArrowNavigation(e);
      }
      
      // T key to toggle TOC
      if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          this.toggleTOC();
        }
      }
      
      // E key to toggle edit mode
      if (e.key === 'e' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          this.toggleEditMode();
        }
      }
      
      // Ctrl/Cmd + P to print
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        this.printContent();
      }

      // Edit mode shortcuts
      if (this.state.isEditMode && this.elements.editTextarea) {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
          e.preventDefault();
          this.saveContent();
        }
      }
    });
  }

  /**
   * Handle arrow key navigation in search
   */
  handleArrowNavigation(e) {
    const files = Array.from(document.querySelectorAll('.file:not([style*="display: none"])'));
    const active = document.querySelector('.file.active');
    if (files.length === 0) return;
    
    e.preventDefault();
    let currentIndex = active ? files.indexOf(active) : -1;
    
    if (e.key === 'ArrowDown') {
      currentIndex = (currentIndex + 1) % files.length;
    } else {
      currentIndex = currentIndex <= 0 ? files.length - 1 : currentIndex - 1;
    }
    
    files[currentIndex].click();
    files[currentIndex].scrollIntoView({ block: 'nearest' });
  }

  /**
   * Toggle edit mode
   */
  toggleEditMode() {
    if (this.state.isEditMode) {
      this.exitEditMode();
    } else {
      const currentPath = this.elements.article.dataset.currentPath;
      if (currentPath) {
        this.state.currentEditPath = currentPath;
        this.enterEditMode();
      } else {
        this.showMessage('No file is currently loaded for editing.', 'error');
      }
    }
  }

  /**
   * Install copy to clipboard functionality
   */
  installCopyToClipboard() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (node.tagName === 'PRE' || node.querySelector('pre')) {
                setTimeout(() => this.addCopyButtons(), 100);
              }
            }
          });
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    setTimeout(() => this.addCopyButtons(), 500);
  }

  /**
   * Utility: Debounce function
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Utility: Escape HTML
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new CheatsheetApp());
} else {
  new CheatsheetApp();
}