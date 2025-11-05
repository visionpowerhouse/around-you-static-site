// script.js — scroll interactions, reveal on scroll, back-to-top
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const nav = document.querySelector('.nav');
  const hero = document.getElementById('hero');
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
      backToTop.style.display = 'flex';
    } else {
      nav.classList.remove('scrolled');
      backToTop.style.display = 'none';
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll);

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      if(!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // update URL hash without jump
        history.replaceState(null, '', '#' + targetId);
      }
    });
  });

  // Intersection Observer for reveal animations
  const reveals = document.querySelectorAll('.reveal');
  const obsOptions = { threshold: 0.12 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, obsOptions);

  reveals.forEach(r => observer.observe(r));

  // Back to top button
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
