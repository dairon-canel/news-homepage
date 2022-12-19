const navigationButton = document.querySelector('.menu-button');
const closedButton = document.querySelector('.menu-button-closed');
const openedButton = document.querySelector('.menu-button-opened');

const navigation = document.querySelector('.main-navigation');
const overlay = document.querySelector('.overlay');

let isOpened = 'false';

const navMenuOpened = () => {
  navigationButton.setAttribute('aria-expanded', 'true');
  toggleMenu();
};

const navMenuClosed = () => {
  navigationButton.setAttribute('aria-expanded', 'false');
  toggleMenu();
};

const toggleMenu = () => {
  overlay.classList.toggle('after:hidden');
  overlay.classList.toggle('no-scroll');
  navigation.classList.toggle('hidden');
  closedButton.classList.toggle('hidden');
  openedButton.classList.toggle('hidden');
};

navigationButton.addEventListener('click', () => {
  isOpened = navigationButton.getAttribute('aria-expanded');
  isOpened === 'false' ? navMenuOpened() : navMenuClosed();
});
