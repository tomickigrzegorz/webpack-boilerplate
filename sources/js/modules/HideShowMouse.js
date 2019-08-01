import { mouse } from '../helpers/constants';
import { docQuerySelector, scrollPos } from '../helpers/elements';

class HideShowMouse {
  hideMouse() {
    this.hideOrShowButtonMouse();
    ['scroll', 'resize'].forEach(event => {
      window.addEventListener(event, this.hideOrShowButtonMouse);
    });
  }

  hideOrShowButtonMouse() {
    const windowWidth = window.innerWidth;
    docQuerySelector(mouse.classScroll).style.display =
      scrollPos() > mouse.scrollPosHeihgt || windowWidth < 1000
        ? 'none'
        : 'block';
  }
}

export default HideShowMouse;
