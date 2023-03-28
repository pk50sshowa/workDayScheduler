// Initial loop to populate timeBlocks with local storage items if they exist
for (var i = 9; i < 18; i++) {
    $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i));
}

// Global variables for the application and time display
var saveButton = $('.saveBtn');

var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd MMMM D, YYYY h:mm A'));

// timeBlocks are to represent each hour of the day (for 9 a.m. to 5 p.m. in this application) and dynamically change class depending on the specific time of day
var currentTime = dayjs().hour();
var timeBlocks = $('.time-block');

// Specific timeBlock function
timeBlocks.each(function () {
  console.log(this.id);
  var blockID = parseInt(this.id.split('-')[1]);
  console.log(blockID);

  if (blockID < currentTime) {
    $(this).removeClass('present');
    $(this).removeClass('future');
    $(this).addClass('past');
  } else if (blockID === currentTime) {
    $(this).removeClass('past');
    $(this).removeClass('future');
    $(this).addClass('present');
  } else {
    $(this).removeClass('present');
    $(this).removeClass('past');
    $(this).addClass('future');
  }
});

// Save button to store inserted task to local storage along with its associated time ID
saveButton.on('click', function () {
var hourEl = $(this).parent().attr('id');
var descrEl = $(this).siblings('.description').val();
localStorage.setItem(hourEl, descrEl);

console.log(hourEl, descrEl);
});