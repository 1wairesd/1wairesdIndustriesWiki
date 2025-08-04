document.addEventListener('DOMContentLoaded', function() {
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}); 