$(function () {

  // Day.js gets the current time
  var currentHour = dayjs().hour();

  var hour9 = document.getElementById('hour-9');
  var am900 = 9;

  var hour10 = document.getElementById('hour-11');
  var am1000 = 10;

  var hour11 = document.getElementById('hour-11');
  var am1100 = 11;

  var hour12 = document.getElementById('hour-12');
  var pm1200 = 12;

  var hour13 = document.getElementById('hour-13');
  var pm1300 = 13;

  var hour14 = document.getElementById('hour-14');
  var pm1400 = 14;

  var hour15 = document.getElementById('hour-15');
  var pm1500 = 15;

  var hour16 = document.getElementById('hour-16');
  var pm1600 = 16;

  var hour17 = document.getElementById('hour-17');
  var pm1700 = 17;

  // compare current hour to schedule hour, and add appropriate class depending on result
  if (am900 < currentHour) {
    hour9.classList.add('past');
  } else if (currentHour === am900) {
    hour9.classList.add('present');
  } else {
    hour9.classList.add('future');
  }

  if (am1000 < currentHour) {
    hour10.classList.add('past');
  } else if (currentHour === am1000) {
    hour10.classList.add('present');
  } else {
    hour10.classList.add('future');
  }

  if (am1100 < currentHour) {
    hour11.classList.add('past');
  } else if (currentHour === am1100) {
    hour11.classList.add('present');
  } else {
    hour11.classList.add('future');
  }

  if (pm1200 < currentHour) {
    hour12.classList.add('past');
  } else if (currentHour === pm1200) {
    hour12.classList.add('present');
  } else {
    hour12.classList.add('future');
  }

  if (pm1300 < currentHour) {
    hour13.classList.add('past');
  } else if (currentHour === pm1300) {
    hour13.classList.add('present');
  } else {
    hour13.classList.add('future');
  }

  if (pm1400 < currentHour) {
    hour14.classList.add('past');
  } else if (currentHour === pm1400) {
    hour14.classList.add('present');
  } else {
    hour14.classList.add('future');
  }

  if (pm1500 < currentHour) {
    hour15.classList.add('past');
  } else if (currentHour === pm1500) {
    hour15.classList.add('present');
  } else {
    hour15.classList.add('future');
  }

  if (pm1600 < currentHour) {
    hour16.classList.add('past');
  } else if (currentHour === pm1600) {
    hour16.classList.add('present');
  } else {
    hour16.classList.add('future');
  }

  if (pm1700 < currentHour) {
    hour17.classList.add('past');
  } else if (currentHour === pm1700) {
    hour17.classList.add('present');
  } else {
    hour17.classList.add('future');
  }

  var currentDay = dayjs().format('dddd, MMMM D, YYYY');
  document.getElementById('timeNow').textContent = currentDay;
});

// When save button is clicked, save contents of text areas with class description to local storage

$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var task = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, task);
  });
})
// get current date from Day.js and display it on the top of the page under "Work Day Scheduler" and scheduler description
var currentDay = dayjs().format('dddd, MMMM D, YYYY');
document.getElementById('timeNow').textContent = currentDay;
