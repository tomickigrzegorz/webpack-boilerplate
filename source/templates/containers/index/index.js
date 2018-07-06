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
                this.balleryCloseButton();
                this.galleryJson(dateName);
            })
        }
        this.galleryClose('modal', 'modal-show');
    }

    galleryClose(modal, modalShow) {
        document.getElementById(modal).addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.remove(modalShow);
            this.style.display = "none";
            this.textContent = '';
        })
    }

    galleryJson(jsonFile) {
        let jsonPath = this.detectMode() + `/data/${jsonFile}.json`;
        axios.get(jsonPath)
            .then(response => this.galleryBuild(response.data.items));
    }

    galleryBuild(arrayItems) {
        let modalPlace = document.getElementById('modal');
        for (let key of arrayItems) {
            modalPlace.innerHTML += (`<img src="` + this.detectMode() + `${key.path}${key.img}" class="img-responsive gallery-items"/>`)
        }
    }

    balleryCloseButton() {
        let buttonModal = `<div id="close-modal" class="text-center">zamknij</div>`;
        document.getElementById('modal').innerHTML = buttonModal;

        this.galleryClose('close-modal', 'modal-show');
    }

}

const options = {
    'scrollPosHeihgt': 200
}

const home = new HomePage(options);
home.init();
