const content = document.querySelector('#content');

function createMenu() {
    let menuDiv = document.createElement('div');
    menuDiv.id = 'menu-sec';
    menuDiv.className = 'text-center menu section-padding';
    
    let menuTitle = document.createElement('h2');
    menuTitle.innerHTML = 'Our Menu';

    let lunchtitle = document.createElement('h3');
    lunchtitle.innerHTML = 'Lunch';

    let lunchList = document.createElement('ul');
    for (var i = 0; i < 6; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = 'Some Item - $12';
        lunchList.appendChild(listItem);
    }

    let dinnertitle = document.createElement('h3');
    dinnertitle.innerHTML = 'Dinner';

    let dinnerList = document.createElement('ul');
    for (var i = 0; i < 6; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = 'Some Item - $12';
        dinnerList.appendChild(listItem);
    }

    menuDiv.appendChild(menuTitle);
    menuDiv.appendChild(lunchtitle);
    menuDiv.appendChild(lunchList);
    menuDiv.appendChild(dinnertitle);
    menuDiv.appendChild(dinnerList);

    content.appendChild(menuDiv);
}

export {createMenu}