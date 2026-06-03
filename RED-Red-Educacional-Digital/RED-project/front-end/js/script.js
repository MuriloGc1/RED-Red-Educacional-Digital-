// Navegação entre telas do painel
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const screens = document.querySelectorAll('.screen');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      screens.forEach(s => s.classList.remove('active'));
      link.classList.add('active');
      const target = document.getElementById(link.dataset.screen);
      if (target) target.classList.add('active');
    });
  });

  // Tabs de bimestre
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tab.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Tabs de contatos
  document.querySelectorAll('.ctab').forEach(tab => {
    tab.addEventListener('click', () => {
      tab.closest('.contacts-tabs').querySelectorAll('.ctab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Selecionar contato
  document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.contact-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Favoritar na biblioteca
  document.querySelectorAll('.btn-fav').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = btn.textContent === '☆' ? '★' : '☆';
    });
  });

  // Perfil no cadastro
  document.querySelectorAll('.perfil-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.perfil-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});