// import '@babel/polyfill';
import ShareButton from './modules/ShareButton';
import './modules/Footer';

import '../../sources/scss/modules/_about.scss';

// console.log('about');

window.addEventListener('load', () => {
  new ShareButton().init();
});