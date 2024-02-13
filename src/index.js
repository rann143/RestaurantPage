import './style.css';
import { createHomePage } from './homepage.js';
import { createMenu } from './menupage.js';
import { createContactPage } from './contactpage.js';


console.log("Big Dawgs Stay Barking");

const container = document.querySelector('#content');
const homeBtn = document.querySelector('#home-button');
const menuBtn = document.querySelector('#menu-button');
const contactBtn = document.querySelector('#contact-button');

homeBtn.addEventListener('click', event => {
    
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
    container.appendChild(createHomePage());
});

menuBtn.addEventListener('click', event => {
    
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
    container.appendChild(createMenu());
});

contactBtn.addEventListener('click', event => {
    
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
    container.appendChild(createContactPage());
});

