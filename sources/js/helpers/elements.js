export function docQuerySelector(selector) {
  return document.querySelector(selector);
}

export function docQuerySelectorAll(selector) {
  return document.querySelectorAll(selector);
}

export function docGetElementById(selector) {
  return document.getElementById(selector);
}

export function scrollPos() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

export function detectMode() {
  const path = !PRODUCTION ? '../../../sources/' : './';
  return path;
}
