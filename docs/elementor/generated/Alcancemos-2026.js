/**
 * ALCANCEMOS — ELEMENTOR PAGE JAVASCRIPT (FASE E1)
 * Purpose: Lightweight behavioral enhancements (Header scroll state toggle, reduced motion check)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll detection
  const header = document.querySelector('header.alc-header, .elementor-location-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 16) {
        header.classList.add('alc-scrolled');
      } else {
        header.classList.remove('alc-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Smooth internal anchor scrolling with header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      }
    });
  });
});
