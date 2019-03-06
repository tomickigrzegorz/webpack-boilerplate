// import '@babel/polyfill';
import SmoothscrollAnchorPolyfill from './modules/SmoothScroll';
import ShareButton from './modules/ShareButton';
import HideShowMouse from './modules/HideShowMouse';
import Gallery from './modules/Gallery';

import './modules/BackToTop';
import './modules/Footer';

import '../../sources/scss/modules/_index.scss';

window.addEventListener('load', () => {

  SmoothscrollAnchorPolyfill.polyfill();

  new HideShowMouse().hideMouse();
  new Gallery().galleryInit();

  new ShareButton().init();

});