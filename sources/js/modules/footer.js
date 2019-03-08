import { docQuerySelector } from '../helpers/elements';
import { classes } from '../helpers/constants.js';


const DateFooter = () => {
  docQuerySelector(classes.classFooterDate).innerHTML = new Date().getFullYear();
};

export default DateFooter;