import { docQuerySelector, scrollPos } from '../helpers/elements';
import { classes, mouse } from '../helpers/constants.js';

const backToTop = docQuerySelector(classes.classBackToTop);

window.addEventListener('scroll', function () {
  backToTop.style.display = scrollPos() > mouse.scrollPosHeihgt ? 'block' : 'none';
});