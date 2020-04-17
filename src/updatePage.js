/**
 * loops through all sections and removes current section if it exists
 */
function removeContent() {
  var sectionNames = ['home-sec', 'about-sec', 'menu-sec', 'contact-sec']

  sectionNames.forEach(sectionName => {
    if (document.getElementById(sectionName) != null) {
      document.getElementById(sectionName).remove();
    }
  });
}

export {removeContent}