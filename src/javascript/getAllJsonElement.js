// Function to get all the json element to display
function getAllJsonElement(filepath) {
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-home', 'JsonNavigation.JsonHome');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-company', 'JsonNavigation.JsonCompany');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-product', 'JsonNavigation.JsonOurProducts');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-news', 'JsonNavigation.JsonNews');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-contact', 'JsonNavigation.JsonContactUs');
};