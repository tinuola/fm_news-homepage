const menuIcon = document.querySelector('#menu-icon');

const menu = document.querySelector('nav ul');

const openIconImg = './assets/images/icon-menu.svg';

const closeIconImg = './assets/images/icon-menu-close.svg';

const navSlider = () => {
  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('nav-show');

    const icon = menuIcon.getAttribute('src');

    if (icon === openIconImg) {
      menuIcon.setAttribute('src', closeIconImg);
    } else {
      menuIcon.setAttribute('src', openIconImg);
    }
  });
};

navSlider();
