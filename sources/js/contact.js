import '@babel/polyfill';
import '../scss/contact.scss';
import addContactInfo from './modules/AddContactInfo';
import dateFooter from './modules/Footer';
import FormValidate from './modules/FormValidate';
import ShareButton from './modules/ShareButton';

addContactInfo();

window.addEventListener('load', () => {
  new ShareButton();
  new FormValidate();
  dateFooter();
});