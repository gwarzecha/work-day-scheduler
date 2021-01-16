// after entering an event and clicking the save icon, save it in local storage
// ensure that the saved events persist when the page is refreshed

// GLOBAL VARIABLES
// display current time/date in header
$("#currentDay").append(moment().format("LLLL"));

// set current date/time for reference in blocks
let currentTime = moment().hour();
console.log(currentTime);

let saveEntry = "";

// FUNCTIONS
// for each description class, run this function to color-coordinate blocks
$(".time-block").each(function() {
  let timeEntryId = $(this).find(".hour").attr("id");
  //console.log(timeEntryId);
  let timeDesc = localStorage.getItem(timeEntryId)
  $(this).find(".description").val(timeDesc);

  var refTime = $(this).find(".description").attr("data-hour");

  if (refTime > currentTime) {
    $(this).find(".description").addClass("future");
  } else if (refTime == currentTime) {
    $(this).find(".description").addClass("present");
  } else if (refTime < currentTime) {
    $(this).find(".description").addClass("past");
  };
});

// let blockTest = document.getElementsByClassName("description");

// save entry to local storage
$(".saveBtn").on("click", function() {
  // console.log("click");
  
  saveEntry = $(this)
    .siblings(".description")
    .val();
  // console.log(saveEntry);

  let timeEntry = $(this)
    .siblings(".hour")
    .attr("id");
    
  // console.dir(blockTest);

  localStorage.setItem(timeEntry, saveEntry);

});









