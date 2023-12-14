// Function to display or not the dropdown content when we click on the menu button
function displayMenuContent() {
  var navButtonContainer = document.getElementById('nav-button');
  
  if (navButtonContainer.style.display === 'none') {
    navButtonContainer.style.display = 'flex';
  } else {
    navButtonContainer.style.display = 'none';
  };
};

window.addEventListener('resize', function() {
  var navButtonContainer = document.getElementById('nav-button');

  if (window.innerWidth <= 1323) {
    navButtonContainer.style.display = 'none';
  } else {
    navButtonContainer.style.display = 'flex';
  }
});