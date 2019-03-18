import '@babel/polyfill';
import '../scss/about.scss';
import dateFooter from './modules/Footer';
import ShareButton from './modules/ShareButton';

window.addEventListener('load', () => {
  new ShareButton().renderButton();
  dateFooter();
});