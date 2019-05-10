import SmoothScroll from 'smooth-scroll';
import '../scss/index.scss';
import observer from './modules/Observer';
import backToTop from './modules/BackToTop';
import dateFooter from './modules/Footer';
import Gallery from './modules/Gallery';
import HideShowMouse from './modules/HideShowMouse';
import ShareButton from './modules/ShareButton';

window.addEventListener('load', () => {

  const scroll = new SmoothScroll('.scroll a[href*="#"]', {
    speed: 300
  });

  new HideShowMouse();
  new Gallery();

  new ShareButton();

  observer();
  backToTop();
  dateFooter();
});