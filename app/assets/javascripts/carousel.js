class Carousel {
  constructor() {
    this.hidePrevFinger();
    this.bindEvents();
  }

  bindEvents() {
    document.querySelector('.carousel-control-next').addEventListener('click', this.nextImg.bind(this));
    document.querySelector('.carousel-control-prev').addEventListener('click', this.prevImg.bind(this));
  }

  nextImg(e) {
    this.showPrevFinger();
    const currentImg = document.querySelector('.carousel-item.active');

    if (currentImg.nextElementSibling) {
      currentImg.classList.remove('active');
      currentImg.nextElementSibling.classList.add('active');
    } else if (!this.isNavShowing()) {
      this.displayNav();
      this.hideNextFinger();
    }
  }

  prevImg(e) {
    this.showNextFinger();
    const currentImg = document.querySelector('.carousel-item.active');
    const prevImg = currentImg.previousElementSibling;

    if (this.isNavShowing()) {
      this.hideNav();
    } else if (prevImg) {
      if (this.isFirstImage(prevImg)) this.hidePrevFinger();

      currentImg.classList.remove('active');
      currentImg.previousElementSibling.classList.add('active');
    }
  }

  isNavShowing() {
    return !!document.querySelector('.carousel-nav.show');
  }

  isFirstImage(img) {
    return img.previousElementSibling == null
  }

  displayNav() {
    document.querySelector('.carousel-nav').classList.add('show');
  }

  hideNav() {
    document.querySelector('.carousel-nav.show').classList.remove('show');
  }

  hideNextFinger() {
    document.querySelector('.carousel-control-next').classList.add('not-active')
  }

  hidePrevFinger() {
    document.querySelector('.carousel-control-prev').classList.add('not-active')
  }

  showNextFinger() {
    document.querySelector('.carousel-control-next').classList.remove('not-active')
  }

  showPrevFinger() {
    document.querySelector('.carousel-control-prev').classList.remove('not-active')
  }
}
