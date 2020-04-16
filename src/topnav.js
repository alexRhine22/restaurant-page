const content = document.querySelector('#content');

function createNavBar() {
    let topDiv = document.createElement('div');
    topDiv.className = 'topnav';

    let restaurantlogo = document.createElement('h1');
    restaurantlogo.innerHTML = 'Restaurant-Logo';

    topDiv.appendChild(restaurantlogo);

    const navbarContent = ['Home', 'About', 'Menu', 'Contact'];
    const navbarContentId = ['#home', '#about', '#menu', '#contact'];
    
    let navBarOptions = document.createElement('ul');
    
    for (var i = 0; i < navbarContent.length; i++) {
        let listElem = document.createElement('li');
        let link = document.createElement('a');
        link.id = navbarContentId[i];
        link.href = '#';
        link.innerHTML = navbarContent[i];
        listElem.appendChild(link);
        navBarOptions.appendChild(listElem);
    }

    topDiv.appendChild(navBarOptions);

    content.appendChild(topDiv); // add top nav sticky bad to content
}

export {createNavBar}