// import '@babel/polyfill';
import addContactInfo from './modules/AddContactInfo';
import ShareButton from './modules/ShareButton';
import FormValidate from './modules/FormValidate';

import dateFooter from './modules/Footer';
dateFooter();

import '../scss/contact.scss';

addContactInfo();

window.addEventListener('load', () => {
  new ShareButton().init();
  new FormValidate().init();
});