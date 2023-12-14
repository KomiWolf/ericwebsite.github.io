// Function to change the website language
function changeLanguage(filepath, id, language) {
  // Change the "lang" attribute of <html> tag
  document.documentElement.setAttribute('lang', language);

  if (id === 'home-page-title') {
    document.getElementById(id).innerText = fetchJsonFileAndDisplayContent(filepath, id, 'JsonNavigation.JsonHome');
    getAllJsonElement(filepath, 'HomePage');
  };
  if (id === 'company-page-title') {
    document.getElementById(id).innerText = fetchJsonFileAndDisplayContent(filepath, id, 'JsonNavigation.JsonCompany');
    getAllJsonElement(filepath, 'CompanyPage');
  };
  if (id === 'products-page-title') {
    document.getElementById(id).innerText = fetchJsonFileAndDisplayContent(filepath, id, 'JsonNavigation.JsonOurProducts');
    getAllJsonElement(filepath, 'ProductsPage');
  };
  if (id === 'news-page-title') {
    document.getElementById(id).innerText = fetchJsonFileAndDisplayContent(filepath, id, 'JsonNavigation.JsonNews');
    getAllJsonElement(filepath, 'NewsPage');
  };
  if (id === 'contact-page-title') {
    document.getElementById(id).innerText = fetchJsonFileAndDisplayContent(filepath, id, 'JsonNavigation.JsonContactUs');
    getAllJsonElement(filepath, 'ContactPage');
  };

  // Save the language in the session storage in the "lang" parameter
  sessionStorage.setItem('lang', language);

  // Change the logo size
  changeLogoSize();
};