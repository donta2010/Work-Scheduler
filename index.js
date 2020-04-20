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
var HourlyNotes;
//Call the ID of where the date should go. Use the html method to write the date in the spot
$("#currentDay").html(todayDate);
console.log(todayDate);
//Create a varible for every hours of the day. 
var hoursOfTheDay = ["9am", "10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"]
//Need to create blodks for each of the hours in the schedule
var Mtime ="";
for(var i=0; i<hoursOfTheDay.length;i++)
{
//Creates the rows for the scheduler
var hourdivs = $("<div>");
//Creates the text box that takes in the users inputs
var textbox = $("<textarea>");
//Creating a class for textarea.
//This will be apart of the key
//This is where we are going to store the users inputs
textbox.attr("class","textarea");
///This will input the hour in the correct box
hourdivs.html(hoursOfTheDay[i]);
//This gives an ID to every hour. This is the only unique identifier for the rows
hourdivs.attr("id",hoursOfTheDay[i]);
//Setting a class to store the corresponding 24hr time for each hour to help with the if condition below
hourdivs.attr("class","24hours");
//updated to reflect CSS
hourdivs.attr("class","row hour");
//Creating the j for my if condition.
//If will give each row their 24hrs to compare against the current time
//However I realized that didn't and it was unecesary since is in the loop I didn't have to save it in a ID
//
var j=(i+9);
//Getting the live current time
var currentTimeHH = moment().format("HH");
//console.log(moment().format("HH"));
//appending the textbox to the div

if(localStorage.getItem(hoursOfTheDay[i]))
{
    textbox.val(localStorage.getItem(hoursOfTheDay[i]));
}
$(hourdivs).append(textbox);

$("#time-block").append(hourdivs);
// $(hourdivs).append(saveBtn);

//savebutton
//creating the same button
var savebutton =$("<button>");
//writing save on the button
savebutton.text("save");
//giving the button a class which we will use for the onclick event
savebutton.attr("class","saveBtn")
//apending the button to the row
$(hourdivs).append(savebutton)

//Need if statmenet for colors
if(j == currentTimeHH)
{
    hourdivs.attr("class"," time present");
    console.log(parseInt($(".24hours").val()));
}
else if (j < currentTimeHH)
{
    hourdivs.attr("class","time past");
}
else
{
    hourdivs.attr("class","time future");
    console.log(parseInt($(".24hours").val()));
}



}
$(".saveBtn").on("click",function(){

    var fin = $(this).parent().attr("id")
    console.log("hour: ",fin);
    //sibling*
    HourlyNotes = $(this).siblings(".textarea").val();
    console.log("Note: ", HourlyNotes);
    localStorage.setItem(fin, HourlyNotes);
})