import { docQuerySelector } from '../helpers/elements';
import '../../scss/modules/_footer.scss';

const DateFooter = () => {
  docQuerySelector('.date-footer').innerHTML = new Date().getFullYear();
};

export default DateFooter;
