// Fade-in sections when they enter the viewport
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.fade-in-section');

  if (!('IntersectionObserver' in window) || sections.length === 0) {
    sections.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -20% 0px'
  });

  sections.forEach(function (el) { observer.observe(el); });
});

// Mobile hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('header-nav-group');

  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the menu when a nav link is clicked
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close the menu if the viewport is resized back to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 700) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
