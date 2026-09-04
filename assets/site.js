document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
const groups = [...document.querySelectorAll('.nav-group')];
groups.forEach(group => group.addEventListener('toggle', () => {
  if (group.open) groups.forEach(other => { if (other !== group) other.open = false; });
}));
document.addEventListener('click', event => {
  groups.forEach(group => { if (!group.contains(event.target)) group.open = false; });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') groups.forEach(group => {
    if (group.open) { group.open = false; group.querySelector('summary').focus(); }
  });
});
function filterPapers(query, records) {
  const tokens = query.normalize('NFKD').toLowerCase().trim().split(/\s+/).filter(Boolean);
  return records.map(text => tokens.every(token => text.normalize('NFKD').toLowerCase().includes(token)));
}
const search = document.querySelector('#paper-search');
if (search) {
  const papers = [...document.querySelectorAll('.paper')];
  search.addEventListener('input', () => {
    const matches = filterPapers(search.value, papers.map(paper => paper.textContent));
    papers.forEach((paper, i) => { paper.hidden = !matches[i]; });
    const count = matches.filter(Boolean).length;
    document.querySelector('#result-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
    document.querySelector('#no-results').hidden = count !== 0;
  });
}
