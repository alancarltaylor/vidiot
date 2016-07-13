/*
 * This function needs to run after angular has loaded the page
 * These scripts do not need access to the controller
 */

function vidiotScripts() {

  // Change this to setup menu controls
  setupDropdowns();

  setupUserActivityTimer();

}

// Move this into its own script - vidiot-menu.js
function setupDropdowns() {

  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  });

}
