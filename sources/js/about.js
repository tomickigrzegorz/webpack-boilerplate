import '../scss/about.scss';
import dateFooter from './modules/Footer';
import ShareButton from './modules/ShareButton';

window.addEventListener('DOMContentLoaded', () => {
  const shareButton = new ShareButton();
  shareButton.renderButton();
  dateFooter();
});
