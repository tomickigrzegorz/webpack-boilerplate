import { classes, mouse } from '../helpers/constants.js';
import { docQuerySelector, scrollPos } from '../helpers/elements';

const backToTop = docQuerySelector(classes.classBackToTop);

const BackToTop = () => {
  window.addEventListener('scroll', function () {
    backToTop.style.display = scrollPos() > mouse.scrollPosHeihgt ? 'block' : 'none';
  });
};

export default BackToTop;