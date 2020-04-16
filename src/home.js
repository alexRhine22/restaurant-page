const content = document.querySelector('#content');

function createHome() {
    let homePage = document.createElement('div');
    homePage.className = 'img-container';
    homePage.id = 'home-sec';

    let picture = document.createElement('img');
    picture.alt = 'background';
    picture.id = 'home-sec';
    picture.src = 'bg.jpeg';
    
    let restaurantName = document.createElement('div');
    restaurantName.className = 'centered';
    restaurantName.innerHTML = 'Restaurant-Name';

    homePage.appendChild(picture);
    homePage.appendChild(restaurantName);

    content.appendChild(homePage);
}

export {createHome}