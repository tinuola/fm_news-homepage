const menuIcon = document.querySelector('#menu-icon');

const menu = document.querySelector('nav ul');

const openIconImg = './assets/images/icon-menu.svg';

const closeIconImg = './assets/images/icon-menu-close.svg';

const overlay = document.querySelector('.overlay');

const navSlider = () => {
  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('nav-show');
    // overlay.classList.toggle('overlay-show');

    let menuIconSrc = menuIcon.getAttribute('src');

    if (menuIconSrc === openIconImg) {
      menuIcon.setAttribute('src', closeIconImg);
      menuIcon.classList.add('menu-icon-shift');
    } else {
      menuIcon.setAttribute('src', openIconImg);
      menuIcon.classList.remove('menu-icon-shift');
    }
  });
};

navSlider();
