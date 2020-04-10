// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// Use moments.js-so we have to link it

//Create a variable for today's date
var todayDate = moment().format("MMM Do YYYY");
//Call the ID of where the date should go. Use the html method to write the date in the spot
$("#currentDay").html(todayDate);
console.log(todayDate);
//Create a varible for every hours of the day. 
var hoursOfTheDay = ["9am", "10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"]
//Need to create blodks for each of the hours in the schedule

var Mtime ="";
for(var i=0; i<hoursOfTheDay.length;i++)
{
var hourdivs = $("<div>");
var textbox = $("<textarea>");
textbox.attr("class","textarea");
hourdivs.html(hoursOfTheDay[i]);
hourdivs.attr("class","24hours");
//updated to reflect CSS
hourdivs.attr("class","row hour");
//updated to reflect CSS
var j=(i+9);
$(".24hours").val(j);
var HHours = $(".24hours").val(j);
//Getting the time
var currentTimeHH = moment().format("HH");
//console.log(moment().format("HH"));

$(hourdivs).append(textbox);
$("#time-block").append(hourdivs);
// $(hourdivs).append(saveBtn);

//savebutton
var button =$("<button>");
button.attr("class","saveBtn")
button.on("click",function()
//Need if statmenet for colors
if(j == currentTimeHH)
{
    hourdivs.attr("class","present");
    console.log(parseInt($(".24hours").val()));
}
else if (j < currentTimeHH)
{
    hourdivs.attr("class","past");
    console.log($(".24hours").val());
    console.log($(".24hours").val());
    console.log(parseInt($(".24hours").val()));
}
else
{
    hourdivs.attr("class","future");
    console.log(parseInt($(".24hours").val()));
}



}

