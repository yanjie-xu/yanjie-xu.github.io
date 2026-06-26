document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
  }
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.filter-grid .news-card');
  filters.forEach(button => button.addEventListener('click', () => {
    const choice = button.dataset.filter;
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    cards.forEach(card => card.classList.toggle('hidden', choice !== 'all' && card.dataset.category !== choice));
  }));
});
