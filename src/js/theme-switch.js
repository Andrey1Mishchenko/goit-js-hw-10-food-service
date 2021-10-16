import menuItemTpl from '../templates/menu-card.hbs';
import menuItems from '../menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// рендеринг разметки элементов меню
const menuEl = document.querySelector('.js-menu');
const itemsMarkup = createMenuItemsMarkup(menuItems);

menuEl.insertAdjacentHTML('beforeend', itemsMarkup);

function createMenuItemsMarkup(items) {
  return menuItemTpl(items);
}
// рендеринг разметки єэлементов меню

// переключение темы. localStorage
const bodyEl = document.querySelector('body');
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
themeSwitchToggle.addEventListener('change', changeThemeSwitchHandler);
function changeThemeSwitchHandler(evt) {
  bodyEl.classList.toggle(Theme.DARK);
}
// переключение темы. localStorage
