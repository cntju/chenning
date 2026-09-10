(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const stored = localStorage.getItem('theme');
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (stored === 'dark' || (!stored && systemDark)) root.dataset.theme = 'dark';

  toggle?.addEventListener('click', () => {
    const dark = root.dataset.theme === 'dark';
    if (dark) delete root.dataset.theme;
    else root.dataset.theme = 'dark';
    localStorage.setItem('theme', dark ? 'light' : 'dark');
  });

  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();
})();
