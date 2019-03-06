import { docQuerySelector } from '../helpers/elements';
import { classes } from '../helpers/constants.js';

docQuerySelector(classes.classFooterDate).innerHTML = new Date().getFullYear();