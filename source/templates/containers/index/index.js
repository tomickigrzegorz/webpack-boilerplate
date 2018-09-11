import "babel-polyfill";
import axios from "axios";
import smoothscroll from "smoothscroll-polyfill"; // https://github.com/iamdustan/smoothscroll
import "./index.scss";
import "../../../scss/modules/_gallery.scss";
import "../../../scss/modules/_parallax.scss";
import "../modules/scrollTop";
import "../modules/shareButton";

smoothscroll.polyfill();

class HomePage {
    constructor(options) {
        this.options = options;
    }

    init() {
        this.hideMouse();
        this.scrollToGallery();
        this.galleryInit();
    }

    detectMode() {
        let path = !PRODUCTION ? `../../../source/` : './';
        return path;
    }

    hideMouse() {
        window.addEventListener('scroll', this.hideOrShowButtonMouse);
        window.addEventListener('resize', this.hideOrShowButtonMouse);
    }

    hideOrShowButtonMouse() {
        let windowWidth = window.innerWidth;
        let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        document.querySelector('.please-scroll').style.display = (scrollPos > options.scrollPosHeihgt || windowWidth < 1000) ? 'none' : 'block';
    }

    scrollToGallery() {
        document.querySelector('.please-scroll').addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.gallery').scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        });
    }

    galleryInit() {
        let elements = document.querySelectorAll('.effect-goliath');
        for (let item of elements) {
            let dateName = item.getAttribute('data-name');
            item.addEventListener('click', e => {
                e.preventDefault();
                document.getElementById('modal').style.display = 'block';
                document.body.classList.add("modal-show");
                this.galleryClose('modal', 'modal-show', 'close-modal');
                this.galleryJson(dateName);
            })
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
                    divModal.style.display = "none";
                    divModal.textContent = '';
                }
            });
        }
    }

    galleryJson(jsonFile) {
        let jsonPath = this.detectMode() + `data/${jsonFile}.json`;
        axios.get(jsonPath)
            .then(response => this.galleryBuild(response.data));
    }

    galleryBuild(arrayItems) {
        let modalPlace = document.getElementById('modal');
        let pathTo = this.detectMode();

        for (let key in arrayItems) {
            let img = arrayItems[key].items.img;
            let pathImg = arrayItems[key].items.path;
            modalPlace.innerHTML += (`
                <picture>
                    <source srcset="${pathTo}${pathImg}${img.replace('jpg', 'webp')}" type="image/webp" class="img-responsive gallery-items">
                    <source srcset="${pathTo}${pathImg}${img}" type="image/jpeg" class="img-responsive gallery-items">
                    <img src="${pathTo}${pathImg}${img}" class="img-responsive gallery-items"/>
                </picture>
            `)
        }
    }

    galleryCloseButton() {
        let buttonModal = `
            <div id="close-modal" class="close-modal" class="text-center">zamknij</div>
        `;
        document.getElementById('modal').innerHTML = buttonModal;

    }

}

const options = {
    'scrollPosHeihgt': 200
}

new HomePage(options).init();
