// Function to change the logo size depending on the language of the website
function changeLogoSize() {
  // Get the current saved language in the session storage
  let savedLanguage = sessionStorage.getItem('lang');

  var logoTop = document.getElementById('logo-top');
  var logoBottom = document.getElementById('logo-bottom');

  if (savedLanguage === 'en') {
    logoTop.style.fontSize = '27px';
    logoBottom.style.fontSize = '20px';
  } else {
    logoTop.style.fontSize = '32px';
    logoBottom.style.fontSize = '18px';
  }
};