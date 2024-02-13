import './style.css';

const createMenu = () => {

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    const menuTitle = document.createElement('h1');
    menuTitle.setAttribute('id', 'menu-title');
    menuTitle.textContent = "Menu";

    const pancakeItem = document.createElement('div');
    const pancakeTitle = document.createElement('h3');
    const pancakeDescr = document.createElement('p');

    pancakeTitle.textContent = "PANCAKES";
    pancakeDescr.textContent = "Warm fluffy pancakes served with grade A maple syrup straight from the source.";
    pancakeItem.appendChild(pancakeTitle);
    pancakeItem.appendChild(pancakeDescr);

    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(pancakeItem);

    return menuContainer;

}

export { createMenu };