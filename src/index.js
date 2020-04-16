import _ from 'lodash';
import {createNavBar} from './topnav.js'
import {createHome} from './home.js'

document.addEventListener("DOMContentLoaded", () => {
    createNavBar();
    createHome();
});