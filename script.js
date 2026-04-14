// Nav scroll state
const nav = document.getElementById('nav');
const updateNav = () => {
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a, .nav .nav-cta').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

// Scroll reveal with stagger
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.services-grid .service-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 90) + 'ms';
});
document.querySelectorAll('.why-grid .why-item').forEach((item, i) => {
  item.style.transitionDelay = (i * 120) + 'ms';
});

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Form — placeholder handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  const original = btn.innerHTML;
  btn.innerHTML = 'Enviando...';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '✓ Solicitud enviada';
    setTimeout(() => {
      btn.innerHTML = original;
      btn.disabled = false;
      e.target.reset();
    }, 2200);
  }, 700);
});
