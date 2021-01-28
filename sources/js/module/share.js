const shareInfo = document.createElement('h2');
shareInfo.textContent = 'shared module between "index" and "about me"';

const title = document.querySelector('h1');
title.insertAdjacentElement('afterend', shareInfo);
