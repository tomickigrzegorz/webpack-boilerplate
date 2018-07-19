import "../../../scss/modules/_scrollToPlace.scss"

;(function scrollTop() {

    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function () {
        let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        backToTop.style.display = scrollPos > 200 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('header').scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    });
}());