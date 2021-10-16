import menuItemTpl from '../templates/menu-card.hbs';
import menuItems from '../menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuEl = document.querySelector('.js-menu');
const itemsMarkup = createMenuItemsMarkup(menuItems);

menuEl.insertAdjacentHTML('beforeend', itemsMarkup);

function createMenuItemsMarkup(items) {
  return menuItemTpl(items);
}
