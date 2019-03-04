const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function () {
  let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  backToTop.style.display = scrollPos > 200 ? 'block' : 'none';
});