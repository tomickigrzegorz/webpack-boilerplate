import { docQuerySelector, scrollPos } from '../helpers/elements';
import '../../scss/modules/_backToTop.scss';

const backToTop = docQuerySelector('.back-to-top');

const BackToTop = () => {
  window.addEventListener('scroll', () => {
    backToTop.style.display = scrollPos() > 200 ? 'block' : 'none';
  });
};

export default BackToTop;
