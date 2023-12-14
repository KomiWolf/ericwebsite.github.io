// Function to display or not the dropdown content when we click on the menu button
function displayMenuContent() {
  var display = document.getElementById('nav-button');
  
  if (display.style.display === 'none') {
    display.style.display = 'flex';
  } else {
    display.style.display = 'none';
  };
};

window.addEventListener('resize', function() {
  var display = document.getElementById('nav-button');

  if (window.innerWidth <= 1323) {
    display.style.display = 'none';
  } else {
    display.style.display = 'flex';
  }
});