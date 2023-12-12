// Function to change the website language
function changeLanguage(filepath, id, language) {
  if (id === 'home-page-title') {
    document.getElementById(id).innerText = fetchJsonFileAndDisplayContent(filepath, id, 'JsonNavigation.JsonHome');
  };
  if (id === 'company-page-title') {
    document.getElementById(id).innerText = fetchJsonFileAndDisplayContent(filepath, id, 'JsonNavigation.JsonCompany');
  };
  if (id === 'products-page-title') {
    document.getElementById(id).innerText = fetchJsonFileAndDisplayContent(filepath, id, 'JsonNavigation.JsonOurProducts');
  };
  if (id === 'news-page-title') {
    document.getElementById(id).innerText = fetchJsonFileAndDisplayContent(filepath, id, 'JsonNavigation.JsonNews');
  };
  if (id === 'contact-page-title') {
    document.getElementById(id).innerText = fetchJsonFileAndDisplayContent(filepath, id, 'JsonNavigation.JsonContactUs');
  };
  // Change the "lang" attribute of <html> tag
  document.documentElement.setAttribute('lang', language);
  getAllJsonElement(filepath);
  // Save the language in the session storage in the "lang" parameter
  sessionStorage.setItem('lang', language);
};