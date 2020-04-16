import _ from 'lodash';
import {createNavBar} from './topnav.js'
import {createHome} from './home.js'
import {createAbout} from './about.js'

const aboutBtn = document.querySelector('#about-sec');

document.addEventListener("DOMContentLoaded", () => {
    createNavBar();
    createHome();
});


// aboutBtn.addEventListener('click', function() {
//     createNavBar();
//     createAbout();
// });
