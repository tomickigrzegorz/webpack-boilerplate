import '@babel/polyfill';
import '../scss/contact.scss';
import addContactInfo from './modules/AddContactInfo';
import dateFooter from './modules/Footer';
import FormValidate from './modules/FormValidate';
import ShareButton from './modules/ShareButton';

dateFooter();

addContactInfo();

window.addEventListener('load', () => {
  new ShareButton().renderButton();
  new FormValidate().prepareElements();
});