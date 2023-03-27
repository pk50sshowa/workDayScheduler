// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveButton = $('.saveBtn');
var textArea = $('description');

var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd MMMM D, YYYY h:mm A'));

var currentTime = dayjs().hour();
var timeBlocks = $('.time-block');

// for (i = 0; i < timeBlocks.length; i++) {
//   console.log(timeBlocks[i].id);
// }

timeBlocks.each(function () {
  console.log(this.id);
  var blockID = parseInt(this.id.split('-')[1]);
  console.log(blockID);

  if (blockID < currentTime) {
    $(this).addClass('past');
  } else if (blockID === currentTime) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }
});

saveButton.on('click', function () {
 
    // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

    var thisTextArea = this.textArea;
    localStorage.setItem(thisTextArea, JSON.stringify(thisTextArea));
    console.log(thisTextArea);



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TBD
  
});
