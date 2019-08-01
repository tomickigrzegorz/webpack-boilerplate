import { classes } from '../helpers/constants';
import { docQuerySelector } from '../helpers/elements';

const DateFooter = () => {
  docQuerySelector(
    classes.classFooterDate
  ).innerHTML = new Date().getFullYear();
};

export default DateFooter;
