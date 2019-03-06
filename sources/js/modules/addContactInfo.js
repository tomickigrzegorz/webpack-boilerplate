import { docQuerySelector } from '../helpers/elements';
import { classes, templateContact } from '../helpers/constants.js';

export default function addPhoneAndEmail() {
    return docQuerySelector(classes.classPhoneAndEmail).innerHTML = templateContact;
}