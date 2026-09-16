const body = document.body;
const toggleButton = document.querySelector('.theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');

const savedTheme = localStorage.getItem('theme');

const applyTheme = (theme) => {
  const isLight = theme === 'light';
  body.classList.toggle('light-mode', isLight);
  toggleButton.setAttribute('aria-pressed', String(isLight));
  toggleIcon.textContent = isLight ? '🌙' : '☀️';
};

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme('dark');
}

toggleButton.addEventListener('click', () => {
  const nextTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', nextTheme);
  applyTheme(nextTheme);
});
