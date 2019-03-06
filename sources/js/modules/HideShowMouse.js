import { docQuerySelector, scrollPos } from '../helpers/elements';
import { mouse } from '../helpers/constants.js';

class HideShowMouse {
  constructor() { }

  hideMouse() {
    window.addEventListener('scroll', this.hideOrShowButtonMouse);
    window.addEventListener('resize', this.hideOrShowButtonMouse);
  }

  hideOrShowButtonMouse() {
    const windowWidth = window.innerWidth;
    docQuerySelector(mouse.classScroll).style.display =
      scrollPos() > mouse.scrollPosHeihgt || windowWidth < 1000 ?
        'none' :
        'block';
  }

}

export default HideShowMouse;