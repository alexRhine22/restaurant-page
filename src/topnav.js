function createNavBar() {
    let topDiv = document.createElement('div');
    topDiv.className = 'topnav';

    let restaurantlogo = document.createElement('h1');
    restaurantlogo.innerHTML = 'Restaurant-Logo';

    topDiv.appendChild(restaurantlogo);

    const navBarOptions = document.createElement("ul");


    document.querySelector("body").prepend(topDiv);
}

export {createNavBar}