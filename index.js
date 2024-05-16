document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[data-scroll]');
  
    const scrollHandler = () => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };
  
    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // Trigger once on load
  });
  