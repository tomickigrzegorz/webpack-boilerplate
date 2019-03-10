import { classes, templateContact } from '../helpers/constants.js';
import { docQuerySelector } from '../helpers/elements';

const AddPhoneAndEmail = () => {
    return docQuerySelector(classes.classPhoneAndEmail).innerHTML = templateContact;
};

export default AddPhoneAndEmail;