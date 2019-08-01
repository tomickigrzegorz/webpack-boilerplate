import { classes, templateContact } from '../helpers/constants';
import { docQuerySelector } from '../helpers/elements';

const AddPhoneAndEmail = () => {
  docQuerySelector(classes.classPhoneAndEmail).innerHTML = templateContact;
};

export default AddPhoneAndEmail;
