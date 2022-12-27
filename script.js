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

  // $('.saveBtn').click(function saveText() {


  // })

  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 

  //function hoursCheck() {

  var currentHour = dayjs().hour();
  //var idHour = document.getElementsByClassName('hour');
  //var hours = ['9', '10', '11', '12', '13', '14', '15', '16', '17'] 

  var hour9 = document.getElementById('hour-9');
  var am900 = 9;

  if (am900 < currentHour) {
    hour9.classList.add('past');
  } else if (currentHour == am900) {
    hour9.classList.add('present');
  } else {
    hour9.classList.add('future')
  };

  var hour10 = document.getElementById('hour-10');
  var am1000 = 10;

  if (am1000 < currentHour) {
    hour10.classList.add('past');
  } else if (currentHour == am900) {
    hour10.classList.add('present');
  } else {
    hour10.classList.add('future')
  }

var hour11 = document.getElementById('hour-11');
var am1100= 11;

  if (am1100 < currentHour) {
    hour11.classList.add('past');
  } else if (currentHour == am1100) {
    hour11.classList.add('present');
  } else {
    hour11.classList.add('future')
  }

  var hour12 = document.getElementById('hour-11');
  var am1200= 12;
  
    if (am1200 < currentHour) {
      hour12.classList.add('past');
    } else if (currentHour == am1200) {
      hour12.classList.add('present');
    } else {
      hour12.classList.add('future')
    }
    
    var hour13 = document.getElementById('hour-11');
var am1300= 13;

  if (am1300 < currentHour) {
    hour13.classList.add('past');
  } else if (currentHour == am1300) {
    hour13.classList.add('present');
  } else {
    hour13.classList.add('future')
  }
  // if (idHour > currentHour) {
  //hour-9.classList.add('past')
  //}

  //HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

  //HINT: How can the id attribute of each time-block be used to do this?
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