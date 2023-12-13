// Function to get all the json element to display
function getAllJsonElement(filepath) {
  // Header contact
  fetchJsonFileAndDisplayContent(filepath, 'header-address', 'JsonHeaderContact.JsonAddress');

  // Top Navigation button
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-home', 'JsonNavigation.JsonHome');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-company', 'JsonNavigation.JsonCompany');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-product', 'JsonNavigation.JsonOurProducts');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-news', 'JsonNavigation.JsonNews');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-contact', 'JsonNavigation.JsonContactUs');

  // Top Navigation menu button
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-home-menu', 'JsonNavigation.JsonHome');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-company-menu', 'JsonNavigation.JsonCompany');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-product-menu', 'JsonNavigation.JsonOurProducts');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-news-menu', 'JsonNavigation.JsonNews');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-contact-menu', 'JsonNavigation.JsonContactUs');
};