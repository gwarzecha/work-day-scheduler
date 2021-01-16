


// display the current date/day/time at the top of the page
// color-code each time block to indicate whether it is past/present/future
  // do this by adding class/removing class if after a time
  // create a time variable to set this in reference to (use moment.js)
  // this can all be housed within the same function
// after entering an event and clicking the save icon, save it in local storage
// ensure that the saved events presist when the page is refreshed





// display current time/date in header
var currentTime = moment().format("LLLL");
$("#currentDay").append(currentTime);