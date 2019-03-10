import '@babel/polyfill';
import '../scss/about.scss';
import dateFooter from './modules/Footer';
import ShareButton from './modules/ShareButton';

dateFooter();

window.addEventListener('load', () => {
  new ShareButton().renderButton();
});