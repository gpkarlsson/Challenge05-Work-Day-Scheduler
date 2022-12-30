//var currentTime = dayjs();
console.log(dayjs().hour());

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var hourDivContainer = document.getElementById('hourDiv');
  var hourTextAreas = hourDivContainer.getElementsByClassName('description');
  var saveBtn = document.getElementById('hourDiv').getElementsByClassName('saveBtn');
  
  saveBtn.addEventListener('click', saveEnteredText());
  
  function saveEnteredText() {
    var scheduledEvent = hourTextAreas.querySelectorAll('.description').value;
    localStorage.setItem('event', scheduledEvent)
  }
//let hourArray = ['hour-9', 'hour-10','hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17']

  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 

  var currentHour = dayjs().hour();

  var hour9 = document.getElementById('hour-9');
  var am900 = 9;

  var hour10 = document.getElementById('hour-11');
  var am1000= 10;

  var hour11 = document.getElementById('hour-11');
  var am1100= 11;

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


//SOLVE LOADING PROBLEM FIRST!!!

// * 1. Get current date and display in hero div DONE
// * 2. compare current time to each hour div on scheduler
// * 3. if current time = specific hour --> add present class, remove past/future (if needed)
// * 3. if current time < (before) specific hour --> add future class, remove present/past (if needed)
// * 4. if current time > (after) specific hour --> add past class, remove present/future (if needed)
// TODO: 5. click save button stores value of inputted text on click in local storage (persists on page refresh)

// for loop to check for hour
//put data attributes on each - time blocks for each when you click on the save
//listen at the parent, refer to self to figure out what time you are
//save that into 

//stored in local storage and want to fetch info, have to loop thru, create dynamically,
//use an array or object then direct object references
//loop through an object
//dynamic creation

 //var eventContainer = {
  //t900: "sometext",
  //t1000: 
  //t1100 
 //}
 
 //on load: eventContainer.t900

 //var el900 = $('#')

 // el900.setAttribute(qualifiedName: "class", value: "past");
 // el900.textContent = eventContainer.t900
 // other half is to save new ones - find way to pull line its on using save button on end of row so that it saves in right place
 // can do with delegation we talked about other day, this button knows its name, e.target to grab its name and gbet id out
 // hand it to parent to get funciton at id level
 // parent can grab its event box

 //or can name it all with IDs and refernce it that way 

 //google how to loop through objects

 //var el1000 = $('#')
 //var el900 = $('#')



//store this as the object ^
 
 //someFunctionThatGetsLocalStorage;

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
  } else if (currentHour === am900) {
    hour9.classList.add('present');
  } else {
    hour9.classList.add('future');
  };

  var hour10 = document.getElementById('hour-10');
  var am1000 = 10;

  if (am1000 < currentHour) {
    hour10.classList.add('past');
  } else if (currentHour === am1000) {
    hour10.classList.add('present');
  } else {
    hour10.classList.add('future');
  }

  var hour11 = document.getElementById('hour-11');
  var am1100= 11;

  if (am1100 < currentHour) {
    hour11.classList.add('past');
  } else if (currentHour === am1100) {
    hour11.classList.add('present');
  } else {
    hour11.classList.add('future');
  }

  var hour12 = document.getElementById('hour-12');
  var pm1200 = 12;
  
    if (pm1200 < currentHour) {
      hour12.classList.add('past');
    } else if (currentHour === pm1200) {
      hour12.classList.add('present');
    } else {
      hour12.classList.add('future');
    }
    
    var hour13 = document.getElementById('hour-13');
    var pm1300= 13;

  if (pm1300 < currentHour) {
    hour13.classList.add('past');
  } else if (currentHour === pm1300) {
    hour13.classList.add('present');
  } else {
    hour13.classList.add('future');
  }

var hour14 = document.getElementById('hour-14');
var pm1400 = 14;

  if (pm1400 < currentHour) {
    hour14.classList.add('past');
  } else if (currentHour === pm1400) {
    hour14.classList.add('present');
  } else {
    hour14.classList.add('future');
  }

  var hour15 = document.getElementById('hour-15');
  var pm1500 = 15;

  if (pm1500 < currentHour) {
    hour15.classList.add('past');
  } else if (currentHour === pm1500) {
    hour15.classList.add('present');
  } else {
    hour15.classList.add('future');
  }

var hour16 = document.getElementById('hour-16');
var pm1600 = 16;

 if (pm1600 < currentHour) {
    hour16.classList.add('past');
  } else if (currentHour === pm1600) {
    hour16.classList.add('present');
  } else {
    hour16.classList.add('future');
  }

  var hour17 = document.getElementById('hour-17');
  var pm1700 = 17;

 if (pm1700 < currentHour) {
    hour17.classList.add('past');
  } else if (currentHour === pm1700) {
    hour17.classList.add('present');
  } else {
    hour17.classList.add('future');
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

//SOLVE LOADING PROBLEM FIRST!!!

// 1. Get current date and display in hero div
// 2. compare current time to each hour div on scheduler
// 3. if current time = specific hour --> add present class, remove past/future (if needed)
// 3. if current time < (before) specific hour --> add future class, remove present/past (if needed)
// 4. if current time > (after) specific hour --> add past class, remove present/future (if needed)
// 5. click save button stores value of inputted text on click in local storage (persists on page refresh)

// for loop to check for hour
//put data attributes on each - time blocks for each when you click on the save
//listen at the parent, refer to self to figure out what time you are
//save that into 

//stored in local storage and want to fetch info, have to loop thru, create dynamically,
//use an array or object then direct object references
//loop through an object
//dynamic creation 


 //var eventContainer = {
  //t900: "sometext",
  //t1000: 
  //t1100 
 //}
 
 //on load: eventContainer.t900

 //var el900 = $('#')

 // el900.setAttribute(qualifiedName: "class", value: "past");
 // el900.textContent = eventContainer.t900
 // other half is to save new ones - find way to pull line its on using save button on end of row so that it saves in right place
 // can do with delegation we talked about other day, this button knows its name, e.target to grab its name and gbet id out
 // hand it to parent to get funciton at id level
 // parent can grab its event box

 //or can name it all with IDs and refernce it that way 

 //google how to loop through objects

 //var el1000 = $('#')
 //var el900 = $('#')



//store this as the object ^
 
 //someFunctionThatGetsLocalStorage;
 //model event container to be 