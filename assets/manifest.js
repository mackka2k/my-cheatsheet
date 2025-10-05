// Manifest of folders and markdown/text files to display
// Paths are relative to project root
window.CS_MANIFEST = [
  { 
    title: 'Shell & Scripting', 
    base: '[BASH]', 
    files: [ 
      { name: '🐚 Bash Commands', path: '[BASH]/bash.sh' } 
    ] 
  },
  { 
    title: 'Programming Languages', 
    base: '[C++]', 
    files: [ 
      { name: '⚡ C++', path: '[C++]/cpp.md' },
      { name: '☕ Java', path: '[JAVA]/java.md' },
      { name: '🟨 JavaScript', path: '[JAVASCRIPT]/js.md' },
      { name: '🔷 TypeScript', path: '[TYPESCRIPT]/ts.md' },
      { name: '🐘 PHP', path: '[PHP]/index.md' }
    ] 
  },
  { 
    title: 'Web Development', 
    base: '[HTML+CSS]', 
    files: [ 
      { name: '🌐 HTML & CSS', path: '[HTML+CSS]/html.md' },
      { name: '⚛️ React', path: '[REACT]/react.md' },
      { name: '📱 React', path: '[REACT-NATIVE]/index.md' },
      { name: '▲ Next.js', path: '[NEXT-JS]/nextjs.md' },
      { name: '🎨 Tailwind CSS', path: '[TAILWIND-CSS]/twcss.md' }
    ] 
  },
  { 
    title: 'Backend & Database', 
    base: '[LARAVEL]', 
    files: [ 
      { name: '🔧 Laravel', path: '[LARAVEL]/laravel.md' },
      { name: '🗄️ MySQL', path: '[MYSQL]/mysql.md' }
    ] 
  },
  { 
    title: 'Development Tools', 
    base: '[GIT]', 
    files: [ 
      { name: '📝 Git Commands', path: '[GIT]/git.md' },
    ] 
  },
  { 
    title: 'Algorithms & Data Structures', 
    base: '[DATA_STRUCTURES_ALGORITHMS]', 
    files: [ 
      { name: '📊 Data Structures Guide', path: '[DATA_STRUCTURES_ALGORITHMS]/data.md' }
    ] 
  },
  { 
    title: 'Desktop Development', 
    base: '[WINFORMS]', 
    files: [ 
      { name: '🖥️ C# WinForms', path: '[WINFORMS]/C#-WINFORMS.md' }
    ] 
  },
  { 
    title: 'Project Files', 
    base: '.', 
    files: [ 
      { name: '📖 README', path: 'README.md' }, 
      { name: '📄 LICENSE', path: 'LICENSE' } 
    ] 
  }
];


