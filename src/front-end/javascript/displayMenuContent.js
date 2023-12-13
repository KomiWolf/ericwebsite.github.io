// Function to display or not the dropdown content when we click on the menu button
function displayMenuContent() {
  var display = document.getElementById('dropdown-content');
  
  if (display.style.display === 'none') {
    display.style.display = 'flex';
    display.style.animationName = 'slideInTop';
    display.style.animationDuration = '0.8s';
    display.style.animationTimingFunction = 'ease-in-out';
  } else {
    display.style.animationName = 'slideInBottom';
    display.style.animationDuration = '0.8s';
    display.style.animationTimingFunction = 'ease';
    setTimeout(function() {
      display.style.display = 'none';
    }, 500);
  };
};

window.addEventListener('resize', function() {
  var display = document.getElementById('dropdown-content');

  if (window.innerWidth >= 901) {
    display.style.display = 'none';
  };
});