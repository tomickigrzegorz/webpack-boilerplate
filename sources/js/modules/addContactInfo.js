import { docQuerySelector } from '../helpers/elements';
import { classes, templateContact } from '../helpers/constants.js';

const AddPhoneAndEmail = () => {
    return docQuerySelector(classes.classPhoneAndEmail).innerHTML = templateContact;
};

export default AddPhoneAndEmail;