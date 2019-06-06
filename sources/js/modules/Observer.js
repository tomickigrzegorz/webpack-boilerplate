import '../../scss/modules/_observer.scss';

const observer = () => {

  let images = document.querySelectorAll('source, img');

  const loadImage = image => {
    image.classList.add('fade-in');
    if (image.dataset && image.dataset.src) {
      image.src = image.dataset.src;
    }

    if (image.dataset && image.dataset.srcset) {
      image.srcset = image.dataset.srcset;
    }
  };

  if ('IntersectionObserver' in window) {
    // IntersectionObserver Supported
    let config = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    // eslint-disable-next-line no-inner-declarations
    const onChange = (changes, observer) => {
      changes.forEach(function (change, index) {
        if (change.intersectionRatio > 0) {
          // Stop watching and load the image
          loadImage(change.target);
          observer.unobserve(change.target);
        }
      });
    };

    let observer = new IntersectionObserver(onChange, config);
    images.forEach(function (img) {
      observer.observe(img);
    });
  } else {
    for (let i = 0; i < images.length; i++) {
      loadImage(images[i]);
    }
  }
};

export default observer;