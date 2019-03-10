export const classes = {
  classScrollButton: '.scroll-button',
  classHiddenButton: '.scroll-button--hidden',
  classHeaderContainer: '.header-container',
  classSticky: '.sticky',
  classMobile: '.mobile',
  classMenuOn: '.menu-on',
  classMenu: '.menu',
  classDate: '.date-footer',
  classFooterDate: '.date-footer',
  classBackToTop: '.back-to-top',
  classPhoneAndEmail: '.phone-and-email',
  classEffectGoliath: '.effect-goliath'
};

export const modal = {
  classModal: 'modal',
  classModalShow: 'modal-show',
  classModalClose: 'modal-close'
};

export const share = {
  classShare: '.share-button',
  classShareBtn: '.share-btn',
  dataShare: '.data-share',
  width: 520,
  height: 320
};

export const mouse = {
  classScroll: '.please-scroll',
  scrollPosHeihgt: 200
};

export const form = {
  formName: '.form',
  classError: 'error',
  classItemForm: '.item-form',
  successSend: '<h2>Dziękuję.<br>Postaram się jak najszybciej odpowiedzieć.</h2>',
  errorSend: 'Wystąpił jakiś błąd proszę wysłać ponownie formularz'
};

export const templateContact = `
  <div class="container info">
      <div class="phone">
          <a href="mailto:infomailATgrzegorztomickiDOTpl" onclick="this.href=this.href.replace(/AT/,'@').replace(/DOT/,'.')"><span class="reverse">lp.ikcimotzrogezrg@liamofni</span></a>
          <a href="tel:+48602622518">tel: +48 602 622 518</a>
      </div>
      <div class="qrcode">
            <img class="hide-md" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAACTAQAAAACinha4AAACDElEQVRIid2Wsc3kIBCFx3JAtm4AiTbIaMluwF434G3JGW0g0QBkBMhzj12v7pcuYXTRHdrA+wXYvHnzBuI/F/3XLBGtimYbD+J80iBhmeviNTkiGzaPvxJ26tnWWZlLmZenRchW7FRMZrPL2VLC7DRZzlLWzlGHk/fT8M+zdTDoBw3u329NuxhW9oZPWs74o5ZdLNk6eU5qfBJtp54kLJcxMz2oLozKmyxi7fMDSrd5k1zdROwc2QdsNpTPg4Alqx9Ob2dYqW6lypgb96JXxxfRVMZdwtATCzfLrG58cZgkLDnDPCY7XpAfhpUwLpVshNFguoGxpYAl4qeDbGgOPZSvT/vY5cKsYBOkQtz50x+9jFEujk8VSIXp/J6jj0HygeOlILxuTSZhXPhpY/bwWt3gHQmDXzYfJo/P0bMLg4RdrtlzK/Gw/PVpN6NAcAqag/SsPnXrZajb4QBwlNbfm4i5SmAwGlLfkYhlP+Ioh6srQbw6SVhytFoiFV9NCX5JGLfYI8yZicPibw91slwQYOZ6G2e6a97LsN+hkAdh8JBBLxKW3+9PCrEdE91ztZNhJaoPFxEJ+dtbnazNGea9YNpEtLWIIUI2RnY21TFaWcTOFpw78o800e2XfoYLSLKRvcHcGIRstRjIfCh+tXklYVzf+6HyY2oxJmDQb8agsC0CcSNgCfube92/x34BzxVUlvGLe5QAAAAASUVORK5CYII=">
      </div>
  </div>
`;

export const templateCloseButton = '<div id="modal-close" class="modal-close" class="text-center">zamknij</div>';