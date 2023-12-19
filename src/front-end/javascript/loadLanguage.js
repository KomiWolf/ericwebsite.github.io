// Function to load correctly all text elements when we enter in a new page
function loadLanguage(whichPage) {
  // Get the current saved language in the session storage
  let savedLanguage = sessionStorage.getItem('lang');

  // Set the language to english if session storage isn't set
  if (savedLanguage === null || savedLanguage === '') {
    savedLanguage = 'en';
  };

  // Set the display of the navigation buttons to 'none'
  if (window.innerWidth <= 1323) {
    document.getElementById('nav-button').style.display = 'none';
  };

  // Change the logo size depending on the language
  changeLogoSize();

  if (savedLanguage === 'en') {
    // Change the "lang" attribute of <html> tag
    document.documentElement.setAttribute('lang', 'en');
    if (whichPage === 'home') {
      document.getElementById('home-page-title').innerText = fetchJsonFileAndDisplayContent('./assets/jsonForTranslate/en.json', 'home-page-title', 'JsonNavigation.JsonHome');
      getAllJsonElement('./assets/jsonForTranslate/en.json', 'HomePage');
    } else if (whichPage === 'company') {
      document.getElementById('company-page-title').innerText = fetchJsonFileAndDisplayContent('../../../../assets/jsonForTranslate/en.json', 'company-page-title', 'JsonNavigation.JsonCompany');
      getAllJsonElement('../../../../assets/jsonForTranslate/en.json', 'CompanyPage');
    } else if (whichPage === 'products') {
      document.getElementById('products-page-title').innerText = fetchJsonFileAndDisplayContent('../../../../assets/jsonForTranslate/en.json', 'products-page-title', 'JsonNavigation.JsonOurProducts');
      getAllJsonElement('../../../../assets/jsonForTranslate/en.json', 'ProductsPage');
    } else if (whichPage === 'news') {
      document.getElementById('news-page-title').innerText = fetchJsonFileAndDisplayContent('../../../../assets/jsonForTranslate/en.json', 'news-page-title', 'JsonNavigation.JsonNews');
      getAllJsonElement('../../../../assets/jsonForTranslate/en.json', 'NewsPage');
    } else if (whichPage === 'contact') {
      document.getElementById('contact-page-title').innerText = fetchJsonFileAndDisplayContent('../../../../assets/jsonForTranslate/en.json', 'contact-page-title', 'JsonNavigation.JsonContactUs');
      getAllJsonElement('../../../../assets/jsonForTranslate/en.json', 'ContactPage');
    };
  } else if (savedLanguage === 'zh-Hans') {
    // Change the "lang" attribute of <html> tag
    document.documentElement.setAttribute('lang', 'zh-Hans');
    if (whichPage === 'home') {
      document.getElementById('home-page-title').innerText = fetchJsonFileAndDisplayContent('./assets/jsonForTranslate/zh.json', 'home-page-title', 'JsonNavigation.JsonHome');
      getAllJsonElement('./assets/jsonForTranslate/zh.json', 'HomePage');
    } else if (whichPage === 'company') {
      document.getElementById('company-page-title').innerText = fetchJsonFileAndDisplayContent('../../../../assets/jsonForTranslate/zh.json', 'company-page-title', 'JsonNavigation.JsonCompany');
      getAllJsonElement('../../../../assets/jsonForTranslate/zh.json', 'CompanyPage');
    } else if (whichPage === 'products') {
      document.getElementById('products-page-title').innerText = fetchJsonFileAndDisplayContent('../../../../assets/jsonForTranslate/zh.json', 'products-page-title', 'JsonNavigation.JsonOurProducts');
      getAllJsonElement('../../../../assets/jsonForTranslate/zh.json', 'ProductsPage');
    } else if (whichPage === 'news') {
      document.getElementById('news-page-title').innerText = fetchJsonFileAndDisplayContent('../../../../assets/jsonForTranslate/zh.json', 'news-page-title', 'JsonNavigation.JsonNews');
      getAllJsonElement('../../../../assets/jsonForTranslate/zh.json', 'NewsPage');
    } else if (whichPage === 'contact') {
      document.getElementById('contact-page-title').innerText = fetchJsonFileAndDisplayContent('../../../../assets/jsonForTranslate/zh.json', 'contact-page-title', 'JsonNavigation.JsonContactUs');
      getAllJsonElement('../../../../assets/jsonForTranslate/zh.json', 'ContactPage');
    };
  };
};