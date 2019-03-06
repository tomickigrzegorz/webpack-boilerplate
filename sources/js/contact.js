// import '@babel/polyfill';
import addContactInfo from './modules/AddContactInfo';
import ShareButton from './modules/ShareButton';
import FormValidate from './modules/FormValidate';

import './modules/Footer';

import '../../sources/scss/modules/_contact.scss';

addContactInfo();
// console.log('contat');


window.addEventListener('load', () => {
  new ShareButton().init();
  new FormValidate().init();
});