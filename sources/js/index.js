import '@babel/polyfill';
import SmoothScroll from 'smooth-scroll';
import ShareButton from './modules/ShareButton';
import HideShowMouse from './modules/HideShowMouse';
import Gallery from './modules/Gallery';

import './modules/BackToTop';
import dateFooter from './modules/Footer';
dateFooter();
import '../scss/index.scss';

window.addEventListener('load', () => {

  const scroll = new SmoothScroll('.scroll a[href*="#"]', {
    speed: 300
  });

  new HideShowMouse().hideMouse();
  new Gallery().galleryInit();

  new ShareButton().init();

});