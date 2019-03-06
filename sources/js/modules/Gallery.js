import { detectMode, docQuerySelector, docQuerySelectorAll } from '../helpers/elements';
import { modal, classes, templateCloseButton, templateImage } from '../helpers/constants';

import axios from 'axios';

import '../../scss/modules/_modal.scss';
import '../../scss/modules/_gallery.scss';


class Gallery {
  constructor() { }

  galleryInit() {
    let elements = docQuerySelectorAll(classes.classEffectGoliath);
    for (let item of elements) {
      const dateName = item.getAttribute('data-name');
      item.addEventListener('click', e => {
        e.preventDefault();
        docQuerySelector(modal.classModal).style.display = 'block';
        document.body.classList.add('modal-show');
        this.galleryClose(modal.classModal, modal.classModalShow, modal.classModalClose);
        this.galleryJson(dateName);
      });
    }
  }

  galleryClose(modal, modalShow, closeModal) {
    this.galleryCloseButton();
    let elements = document.querySelectorAll(`#${modal}, #${closeModal}`);
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', function (e) {
        e.preventDefault();
        let divCloseModal = document.getElementById(closeModal);
        let divModal = document.getElementById(modal);
        if (e.target == divModal || e.target == divCloseModal) {
          document.body.classList.remove(modalShow);
          divModal.style.display = 'none';
          divModal.textContent = '';
        }
      });
    }
  }

  galleryJson(jsonFile) {
    const jsonPath = detectMode() + `data/${jsonFile}.json`;
    axios.get(jsonPath).then(response => this.galleryBuild(response.data));
  }

  galleryBuild(arrayItems) {
    const pathTo = detectMode();
    const modalPlace = docQuerySelector(modal.classModal);
    const fragment = document.createDocumentFragment();

    for (let key in arrayItems) {
      const img = arrayItems[key].items.img;
      const pathImg = `${pathTo}${arrayItems[key].items.path}`;
      const picture = document.createElement('picture');
      picture.innerHTML += `
        <source srcset="${pathImg}${img.replace('jpg', 'webp')}" type="image/webp" class="img-responsive gallery-items">
        <source srcset="${pathImg}${img}" type="image/jpeg" class="img-responsive gallery-items">
        <img src="${pathImg}${img}" class="img-responsive gallery-items"/>
      `;
      fragment.appendChild(picture);
    }
    modalPlace.appendChild(fragment);
  }

  galleryCloseButton() {
    const buttonModal = templateCloseButton;
    docQuerySelector(modal.classModal).innerHTML = buttonModal;
  }

}

export default Gallery;