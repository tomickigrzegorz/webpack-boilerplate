import SmoothScroll from 'smooth-scroll';
import '../scss/modules/_global.scss';
import '../scss/index.scss';
import '../scss/modules/_parallax.scss';

import observer from './modules/Observer';
import backToTop from './modules/BackToTop';
import dateFooter from './modules/Footer';
import Gallery from './modules/Gallery';
import ShareButton from './modules/ShareButton';

window.addEventListener('DOMContentLoaded', () => {
  const option = {
    speed: 100,
    easing: 'easeOutCubic',
  };
  // eslint-disable-next-line no-unused-vars
  const scroll = new SmoothScroll('.scroll', option);

  const gallery = new Gallery();
  gallery.galleryInit();

  const shareButton = new ShareButton();
  shareButton.renderButton();

  observer();
  backToTop();
  dateFooter();
});
