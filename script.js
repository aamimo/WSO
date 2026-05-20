// Mobile nav toggle + active link highlighting + contact form
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // Active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });

  // Contact form
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const body = `Name: ${fd.get('name')}%0D%0AEmail: ${fd.get('email')}%0D%0A%0D%0A${fd.get('message')}`;
      window.location.href = `mailto:wasaniisanaa@gmail.com?subject=Website Inquiry from ${fd.get('name')}&body=${body}`;
      const note = document.getElementById('sentNote');
      if (note) note.classList.remove('hidden');
    });
  }
});
