//var currentTime = dayjs();
console.log(dayjs().hour());

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


  //event listener -> onclick saveButton -> save to Local Storage


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  $('.saveBtn').click(function saveText() {


  })
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  var currentHour = dayjs().hour();
  var idHour = document.getElementsByClassName('hour');

  //for (idHour < currentHour) {
  //add class('future')
  //} 

  // if (idHour > currentHour) {
  //hour-9.classList.add('past')
  //}

  //HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

  //HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var currentDay = dayjs().format('dddd, MMMM D, YYYY');
  document.getElementById('timeNow').textContent = currentDay;
});



// DONE 1. Get current time (specific down to hour in 24hr clock) and display in hero div
// 2. compare current time to each hour div on scheduler
// 3. if current time = specific hour --> add present class, remove past/future (if needed)
// 3. if current time < (before) specific hour --> add future class, remove present/past (if needed)
// 4. if current time > (after) specific hour --> add past class, remove present/future (if needed)
// 5. click save button stores value of inputted text on click in local storage (persists on page refresh)

//use for loop