import { docQuerySelector, docQuerySelectorAll } from '../helpers/elements';
import '../../scss/modules/_shareButtons.scss';

const share = {
  classShare: '.share-button',
  classShareBtn: '.share-btn',
  dataShare: 'data-share',
  width: 520,
  height: 320,
};

class ShareButton {
  renderButton() {
    const buttonPlace = docQuerySelector(share.classShare);
    const item = {
      facebook: {
        name: 'facebook',
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" class="share-icon share-icon-facebook" viewBox="0 0 27 27"><g><path d="M 22 5.16 c -0.406 -0.054 -1.806 -0.16 -3.43 -0.16 c -3.4 0 -5.733 1.825 -5.733 5.17 v 2.882 H 9 v 3.913 h 3.837 V 27 h 4.604 V 16.965 h 3.823 l 0.587 -3.913 h -4.41 v -2.5 c 0 -1.123 0.347 -1.903 2.198 -1.903 H 22 V 5.16 Z" /></g></svg>',
        title:
          'Udostępnij w serwisie Facebook. Strona otworzy się w nowym oknie.',
      },
      twitter: {
        name: 'twitter',
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" class="share-icon share-icon-twitter" viewBox="0 0 32 32"><g><path d="M 27.996 10.116 c -0.81 0.36 -1.68 0.602 -2.592 0.71 a 4.526 4.526 0 0 0 1.984 -2.496 a 9.037 9.037 0 0 1 -2.866 1.095 a 4.513 4.513 0 0 0 -7.69 4.116 a 12.81 12.81 0 0 1 -9.3 -4.715 a 4.49 4.49 0 0 0 -0.612 2.27 a 4.51 4.51 0 0 0 2.008 3.755 a 4.495 4.495 0 0 1 -2.044 -0.564 v 0.057 a 4.515 4.515 0 0 0 3.62 4.425 a 4.52 4.52 0 0 1 -2.04 0.077 a 4.517 4.517 0 0 0 4.217 3.134 a 9.055 9.055 0 0 1 -5.604 1.93 A 9.18 9.18 0 0 1 6 23.85 a 12.773 12.773 0 0 0 6.918 2.027 c 8.3 0 12.84 -6.876 12.84 -12.84 c 0 -0.195 -0.005 -0.39 -0.014 -0.583 a 9.172 9.172 0 0 0 2.252 -2.336" /></g></svg>',
        title:
          'Udostępnij w serwisie Twitter. Strona otworzy się w nowym oknie.',
      },
    };

    const html = `
        <div class="share-button">
            <div title="${item.facebook.title}" data-share="${item.facebook.name}" class="share-btn btn-facebook">
                <span class="share-btn__wrapper">${item.facebook.svg}</span>
            </div>
            <div title="${item.twitter.title}" data-share="${item.twitter.name}" class="share-btn btn-twitter">
                <span class="share-btn__wrapper">${item.twitter.svg}</span>
            </div>
        </div>
        `;

    if (buttonPlace) {
      buttonPlace.innerHTML = html;
    }
    this.eventButton();
  }

  eventButton() {
    const buttonShare = docQuerySelectorAll(share.classShareBtn);
    const winWidth = share.width;
    const winHeight = share.height;
    // eslint-disable-next-line no-restricted-globals
    const winTop = screen.height / 2 - winHeight / 2;
    // eslint-disable-next-line no-restricted-globals
    const winLeft = screen.width / 2 - winWidth / 2;

    buttonShare.forEach(item => {
      const typeSocial = item.getAttribute(share.dataShare);
      item.addEventListener('click', e => {
        e.preventDefault();
        if (typeSocial === 'print') {
          window.print();
        } else {
          window.open(
            this.showShareLink(typeSocial),
            'sharer',
            `top=${winTop},left=${winLeft},toolbar=0,status=0,width=${winWidth},height=${winHeight}`
          );
        }
      });
    });
  }

  showShareLink(typeSocial) {
    let url;
    // eslint-disable-next-line default-case
    switch (typeSocial) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${this.getUrl()}&p=${this.getDescription()}`;
        break;
      case 'twitter':
        url = `http://twitter.com/share?text=${this.getTitle()}&url=${this.getUrl()}`;
        break;
    }
    return url;
  }

  getUrl() {
    return window.location.href;
  }

  getTitle() {
    return document.title;
  }

  getDescription() {
    let description;
    const meta = document.getElementsByTagName('meta');

    for (let x = 0, y = meta.length; x < y; x++) {
      if (meta[x].name.toLowerCase() === 'description') {
        description = meta[x];
      }
    }
    const content = description.content.replace(/ /g, '%20');
    return content;
  }
}

export default ShareButton;
