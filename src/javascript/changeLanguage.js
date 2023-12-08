function changeLanguage(filepath, id) {
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
  getAllJsonElement(filepath);
};