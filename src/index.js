import _ from 'lodash';
import {createNavBar} from './topnav.js';
import {removeContent} from './updatePage.js';
import {createHome} from './home.js';
import {createAbout} from './about.js';
import {createMenu} from './menu.js';
import {createContact} from './contact.js';

document.addEventListener("DOMContentLoaded", () => {
    createNavBar();
    createHome();
    navHandler();
});


/**
 * https://github.com/airbnb/javascript#functions
 * on function naming
 */
const navHandler = function handleNavClicks() {

    const homeBtn = document.getElementById('home');

    homeBtn.addEventListener('click', function() {
        removeContent();
        createHome();
    });

    const aboutBtn = document.getElementById('about');

    aboutBtn.addEventListener('click', function() {
        removeContent();
        createAbout();
    });

    const menuBtn = document.getElementById('menu');

    menuBtn.addEventListener('click', function() {
        removeContent();
        createMenu();
    });

    const contactBtn = document.getElementById('contact');

    contactBtn.addEventListener('click', function() {
        removeContent();
        createContact();
    });
}

