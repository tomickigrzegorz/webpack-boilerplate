import "babel-polyfill";
import addContactInfo from '../modules/addContactInfo';
import '../modules/validation';

import "../modules/shareButton";
import './contact.scss';
import './validation.scss';

addContactInfo();

console.log('contact');
