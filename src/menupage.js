import './style.css';


const createMenu = () => {

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    const menuTitle = document.createElement('h1');
    menuTitle.setAttribute('id', 'menu-title');
    menuTitle.textContent = "Menu";

    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(menu.createMenuItem("EGGS", "Have 'em anyway you'd like!"));
    menuContainer.appendChild(menu.createMenuItem("PANCAKES", "Warm fluffy pancakes served with Grade A maple syrup straight from the source."));
    menuContainer.appendChild(menu.createMenuItem("WAFFLES", "Get 'em now 'n get HOT. Served with your choice of fruit."));

    return menuContainer;

}

export { createMenu };

//Created a Module Pattern: factory function for creating menu items wrapped inside an IIFE
const menu = (function MenuManager() {

    const createMenuItem = (item, description) => {

        const menuItem = document.createElement('div');
        const itemTitle = document.createElement('h3');
        const itemDescription = document.createElement('p');


        itemTitle.textContent = item;
        itemDescription.textContent = description;

        menuItem.appendChild(itemTitle);
        menuItem.appendChild(itemDescription);

        return menuItem;


    }

    return {
        createMenuItem,
    };


})();

