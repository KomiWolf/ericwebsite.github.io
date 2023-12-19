// Function to change the logo size depending on the language of the website
function changeLogoSize() {
  // Get the current saved language in the session storage
  let savedLanguage = sessionStorage.getItem('lang');

  var logoContainer = document.getElementById('logo-container');
  var logoTop = document.getElementById('logo-top');
  var logoBottom = document.getElementById('logo-bottom');

  // Set the language to english if session storage isn't set
  if (savedLanguage === null || savedLanguage === '') {
    savedLanguage = 'en';
  };

  if (savedLanguage === 'en') {
    logoContainer.style.marginLeft = '14%';
    logoTop.style.fontSize = '27px';
    logoBottom.style.fontSize = '20px';
  } else {
    logoContainer.style.marginLeft = '10%';
    logoTop.style.fontSize = '32px';
    logoBottom.style.fontSize = '18px';
  }
};