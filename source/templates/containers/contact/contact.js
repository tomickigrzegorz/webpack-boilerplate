import "../../helpers/shareButton";

import './contact.scss';

(function addPhoneAndEmail() {
    const plaseToSet = document.querySelector('.phone-and-email');
    const templateHtml = `
        <div class="container grid-xs">
            <div class="columns">
                <div class="column connect">
                    <p>
                        <a href="mailto:infoATgrzegorztomickiDOTpl" onclick="this.href=this.href.replace(/AT/,'@').replace(/DOT/,'.')"><span class="reverse">lp.ikcimotzrogezrg@ofni</span></a><br>
                        <a href="tel:+48602622518">tel: +48 602 622 518</a>
                    </p>
                </div>
                <div class="column hide-md">
                    <img class="hide-md" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAACTAQAAAACinha4AAACDElEQVRIid2Wsc3kIBCFx3JAtm4AiTbIaMluwF434G3JGW0g0QBkBMhzj12v7pcuYXTRHdrA+wXYvHnzBuI/F/3XLBGtimYbD+J80iBhmeviNTkiGzaPvxJ26tnWWZlLmZenRchW7FRMZrPL2VLC7DRZzlLWzlGHk/fT8M+zdTDoBw3u329NuxhW9oZPWs74o5ZdLNk6eU5qfBJtp54kLJcxMz2oLozKmyxi7fMDSrd5k1zdROwc2QdsNpTPg4Alqx9Ob2dYqW6lypgb96JXxxfRVMZdwtATCzfLrG58cZgkLDnDPCY7XpAfhpUwLpVshNFguoGxpYAl4qeDbGgOPZSvT/vY5cKsYBOkQtz50x+9jFEujk8VSIXp/J6jj0HygeOlILxuTSZhXPhpY/bwWt3gHQmDXzYfJo/P0bMLg4RdrtlzK/Gw/PVpN6NAcAqag/SsPnXrZajb4QBwlNbfm4i5SmAwGlLfkYhlP+Ioh6srQbw6SVhytFoiFV9NCX5JGLfYI8yZicPibw91slwQYOZ6G2e6a97LsN+hkAdh8JBBLxKW3+9PCrEdE91ztZNhJaoPFxEJ+dtbnazNGea9YNpEtLWIIUI2RnY21TFaWcTOFpw78o800e2XfoYLSLKRvcHcGIRstRjIfCh+tXklYVzf+6HyY2oxJmDQb8agsC0CcSNgCfube92/x34BzxVUlvGLe5QAAAAASUVORK5CYII=">
                </div>
            </div>
        </div>
    `;
    return plaseToSet.innerHTML = templateHtml;
}());

console.log('contact');