// This file fetch the json file and display the exact json variable we want in the html code

// Function to get a nested variable/property in an javascript/JSON object
function getNestedProperty(dataObject, variablePath) {
  // "properties" variable will contain all separated variables from variable "variablePath"
  const properties = variablePath.split('.');

  // "reduce" is a javascript function to iterate in an array/object from the "split" function
  // "accumulator" keep the result of the object at each iteration ("dataObject" is the initial value of "accumulator")
  // "current" is the current element of the array
  // The "&&" operator is used to access the current property of the accumulator and accumulator will be updated
  // Example for "JsonNavigation.JsonHome" :
  //  -First iteration: accumulator['JsonNavigation']
  //  -Second iteration: accumulator['JsonNavigation']['JsonHome']
  // The "reduce" function will return the last value (JsonHome for the example)
  return properties.reduce((accumulator, current) => accumulator && accumulator[current], dataObject);
}

// Function to fetch the json file we want and display the content we want
function fetchJsonFileAndDisplayContent(filepath, id, jsonVariableName) {
  fetch(filepath)
    .then(response => response.json())
    // "data" is the content of the entire file
    .then(data => {
      const targetElement = document.getElementById(id);

      // Verify if the specified id of the element exist in the DOM
      if (targetElement) {
        const value = getNestedProperty(data, jsonVariableName);
        // Verify of the value exist
        if (value !== undefined) {
          // Link the value with the HTML element
          targetElement.innerHTML = value;
        } else {
          console.error('Variable ' + jsonVariableName + ' not found in the JSON data.');
        }
      } else {
        console.error('Element with ID ' + id + ' not found.');
      }
    })
    .catch(error => console.error('Error while loading the JSON file:', error));
}

// Function to get all the json element to display
function getAllJsonElement(filepath) {
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-home', 'JsonNavigation.JsonHome');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-company', 'JsonNavigation.JsonCompany');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-product', 'JsonNavigation.JsonOurProducts');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-news', 'JsonNavigation.JsonNews');
  fetchJsonFileAndDisplayContent(filepath, 'top-nav-contact', 'JsonNavigation.JsonContactUs');
}