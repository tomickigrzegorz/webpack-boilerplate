import '../scss/contact.scss';
import addContactInfo from './modules/AddContactInfo';
import dateFooter from './modules/Footer';
import FormValidate from './modules/FormValidate';
import ShareButton from './modules/ShareButton';

addContactInfo();

window.addEventListener('DOMContentLoaded', () => {
  const shareButton = new ShareButton();
  shareButton.renderButton();

  const formValidate = new FormValidate();
  formValidate.prepareElements();

  dateFooter();
});
