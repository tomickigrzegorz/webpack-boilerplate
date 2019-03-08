import '@babel/polyfill';
import ShareButton from './modules/ShareButton';
import dateFooter from './modules/Footer';
dateFooter();

import '../scss/about.scss';

window.addEventListener('load', () => {
  new ShareButton().init();
});