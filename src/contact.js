const content = document.querySelector('#content');

function createContact() {
    let contactDiv = document.createElement('div');
    contactDiv.id = 'contact-sec';
    contactDiv.className = 'text-center section-padding';

    // contact title
    let contactTitle = document.createElement('h2');
    contactTitle.innerHTML = 'Contact Us';

    contactDiv.appendChild(contactTitle);

    // contact info div
    let infoDiv = document.createElement('div');
    infoDiv.className = 'contact';

    infoDiv.appendChild(createPhoneInfo());
    infoDiv.appendChild(createVL());
    infoDiv.appendChild(createAddressInfo());
    infoDiv.appendChild(createVL());
    infoDiv.appendChild(createHoursInfo());

    // add contact div to outside div
    contactDiv.appendChild(infoDiv);

    content.appendChild(contactDiv);
}

function createVL() {
    let lineDiv = document.createElement('div');
    lineDiv.className = 'vl';

    return lineDiv;
}

function createPhoneInfo() {
    const listItemtxt = ['<b>Phone:</b>', '(999) 555-5555'];

    let phoneList = document.createElement('ul');

    for (var i = 0; i < listItemtxt.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = listItemtxt[i];
        phoneList.appendChild(item);
    }

    return phoneList;
}

function createAddressInfo() {
    const listItemtxt = ['<b>Adress:</b>', '4037 Calico Drive', 'Spokane Valley, WA 99206'];

    let addressList = document.createElement('ul');

    for (var i = 0; i < listItemtxt.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = listItemtxt[i];
        addressList.appendChild(item);
    }

    return addressList;
}

function createHoursInfo() {
    const listItemtxt = ['<b>Hours:</b>', 'Mon-Fri: 8am - 6pm'];

    let hoursList = document.createElement('ul');

    for (var i = 0; i < listItemtxt.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = listItemtxt[i];
        hoursList.appendChild(item);
    }

    return hoursList; 
}

export {createContact}