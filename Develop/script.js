



// color-code each time block to indicate whether it is past/present/future
// do this by adding class/removing class if after a time
// create a time variable to set this in reference to (use moment.js)
// this can all be housed within the same function
// after entering an event and clicking the save icon, save it in local storage
// ensure that the saved events presist when the page is refreshed





// display current time/date in header
$("#currentDay").append(moment().format("LLLL"));

// set current date/time for reference in blocks
let currentTime = moment().hour();
console.log(currentTime);

// for each description class, run this function to color-coordinate blocks
$(".description").each(function () {
  var refTime = $(this).attr("data-hour");

  if (refTime > currentTime) {
    $(this).addClass("future");
  } else if (refTime == currentTime) {
    $(this).addClass("present");
  } else if (refTime < currentTime) {
    $(this).addClass("past");
  };
});







