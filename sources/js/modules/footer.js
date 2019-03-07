import { docQuerySelector } from '../helpers/elements';
import { classes } from '../helpers/constants.js';


export default function dateFooter() {
  docQuerySelector(classes.classFooterDate).innerHTML = new Date().getFullYear();
}