// Function to get all the json element to display
function getAllJsonElement(filepath, whichPage) {
  // Header contact
  fetchJsonFileAndDisplayContent(filepath, 'header-address', 'JsonHeaderContact.JsonAddress');

  // Logo
  fetchJsonFileAndDisplayContent(filepath, 'logo-top', 'JsonNavigation.JsonLogoTop');
  fetchJsonFileAndDisplayContent(filepath, 'logo-bottom', 'JsonNavigation.JsonLogoBottom');

  // Top Navigation button
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-home', 'JsonNavigation.JsonHome');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-company', 'JsonNavigation.JsonCompany');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-product', 'JsonNavigation.JsonOurProducts');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-news', 'JsonNavigation.JsonNews');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-contact', 'JsonNavigation.JsonContactUs');

  if (whichPage === 'HomePage') {
    // Home page element
    fetchJsonFileAndDisplayContent(filepath, 'company-card-title', 'JsonHomePage.JsonCompanyCard.JsonCompanyCardTitle');
    fetchJsonFileAndDisplayContent(filepath, 'Learn-more-button', 'JsonHomePage.JsonCompanyCard.JsonLearnMoreButton')
  };
};