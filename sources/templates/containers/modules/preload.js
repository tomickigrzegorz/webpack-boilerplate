import '../../../scss/modules/_preload.scss';

let preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.remove('show-preloader');
    }, 500);
});