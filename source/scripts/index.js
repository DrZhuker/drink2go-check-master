
const menuLink = document.querySelector('.user-menu__link--menu');
const headerNavigation = document.querySelector('.navigation');

if (menuLink && headerNavigation) {
  menuLink.addEventListener('click', () => {
    headerNavigation.classList.toggle('navigation--close');
    menuLink.classList.toggle('user-menu__link--menu-opened');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (!headerNavigation.classList.contains('navigation--close')) {
        headerNavigation.classList.add('navigation--close');
        menuLink.classList.remove('user-menu__link--menu-opened');
      }
    }
  });
  document.addEventListener('click', (event) => {
    if (!menuLink.contains(event.target) && !headerNavigation.contains(event.target)) {
      if (!headerNavigation.classList.contains('navigation--close')) {
        headerNavigation.classList.add('navigation--close');
        menuLink.classList.remove('user-menu__link--menu-opened');
      }
    }
  });
}
