const content = document.querySelector('#content');

function createNavBar() {
    let topDiv = document.createElement('div');
    topDiv.className = 'topnav';

    let restaurantlogo = document.createElement('h1');
    restaurantlogo.innerHTML = 'Restaurant-Logo';

    topDiv.appendChild(restaurantlogo);

    const navbarContent = ['Home', 'About', 'Menu', 'Contact'];
    
    let navBarOptions = document.createElement('ul');
    
    for (var i = 0; i < navbarContent.length; i++) {
        let navBarItem = navbarContent[i];
        let listElem = document.createElement('li');
        let link = document.createElement('a');
        link.id = navBarItem.toLowerCase();
        link.href = '#';
        link.innerHTML = navBarItem;
        listElem.appendChild(link);
        navBarOptions.appendChild(listElem);
    }

    topDiv.appendChild(navBarOptions);

    content.appendChild(topDiv); 
}

export {createNavBar}