// Create variable for top of page

var currentDay = moment().format("dddd, MMMM Do");

// Display display current day in element of same ID

$("#currentDay").text(currentDay);

// Use moment.js to create variables for each hour of workday

var hour1 = moment().hour(9);
var hour2 = moment().hour(10);
var hour3 = moment().hour(11);
var hour4 = moment().hour(12);
var hour5 = moment().hour(13);
var hour6 = moment().hour(14);
var hour7 = moment().hour(15);
var hour8 = moment().hour(16);
var hour9 = moment().hour(17);
var hour10 = moment().hour(18);

// create array of hour timeblocks

var hourBlock = [hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9];

// add hour timeblocks to local storage

var plan1 = JSON.parse(localStorage.getItem('hour1')) || ""
var plan2 = JSON.parse(localStorage.getItem('hour2')) || "";
var plan3 = JSON.parse(localStorage.getItem('hour3')) || "";
var plan4 = JSON.parse(localStorage.getItem('hour4')) || "";
var plan5 = JSON.parse(localStorage.getItem('hour5')) || "";
var plan6 = JSON.parse(localStorage.getItem('hour6')) || "";
var plan7 = JSON.parse(localStorage.getItem('hour7')) || "";
var plan8 = JSON.parse(localStorage.getItem('hour8')) || "";
var plan9 = JSON.parse(localStorage.getItem('hour9')) || "";
var plan10 = JSON.parse(localStorage.getItem('hour10')) || "";

// Create array of plans in timeblock storage

var plans = [plan1, plan2, plan3, plan4, plan5, plan6, plan7, plan8, plan9, plan10];

// Save plans to local storage

$.each(hourBlock, function (index, value) {
    plans 
  $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
        (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + plans[index] + "</textarea></div>" +
        "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});


// Function to color hour blocks based on past, present and future


    var colorTime = function() {

        currentTime = moment().format("hh:mm:ss");

        if (moment().isBetween(hour1, hour2)) {
            $("#timeblock9").addClass("present");
        }
        else if (moment().isAfter(hour2)) {
            $("#timeblock9").addClass("past");
        }
        else {
            $("#timeblock9").addClass("future");
        }

        // Audit hour 10 and set color
        if (moment().isBetween(hour2, hour3)) {
            $("#timeblock10").addClass("present");
        }
        else if (moment().isAfter(hour3)) {
            $("#timeblock10").addClass("past");
        }
        else {
            $("#timeblock10").addClass("future");
        }

        // Audit hour 11 and set color
        if (moment().isBetween(hour3, hour4)) {
            $("#timeblock11").addClass("present");
        }
        else if (moment().isAfter(hour4)) {
            $("#timeblock11").addClass("past");
        }
        else {
            $("#timeblock11").addClass("future");
        }

        // Audit hour 12 and set color
        if (moment().isBetween(hour4, hour5)) {
            $("#timeblock12").addClass("present");
        }
        else if (moment().isAfter(hour5)) {
            $("#timeblock12").addClass("past");
        }
        else {
            $("#timeblock12").addClass("future");
        }

        // Audit hour 13 and set color
        if (moment().isBetween(hour5, hour6)) {
            $("#timeblock13").addClass("present");
        }
        else if (moment().isAfter(hour6)) {
            $("#timeblock13").addClass("past");
        }
        else {
            $("#timeblock13").addClass("future");
        }

        // Audit hour 14 and set color
        if (moment().isBetween(hour6, hour7)) {
            $("#timeblock14").addClass("present");
        }
        else if (moment().isAfter(hour7)) {
            $("#timeblock14").addClass("past");
        }
        else {
            $("#timeblock14").addClass("future");
        }

        // Audit hour 15 and set color
        if (moment().isBetween(hour7, hour8)) {
            $("#timeblock15").addClass("present");
        }
        else if (moment().isAfter(hour8)) {
            $("#timeblock15").addClass("past");
        }
        else {
            $("#timeblock15").addClass("future");
        }

        // Audit hour 16 and set color
        if (moment().isBetween(hour8, hour9)) {
            $("#timeblock16").addClass("present");
        }
        else if (moment().isAfter(hour9)) {
            $("#timeblock16").addClass("past");
        }
        else {
            $("#timeblock16").addClass("future");
        }

        // Audit hour 17 and set color
        if (moment().isBetween(hour9, hour10)) {
            $("#timeblock17").addClass("present");
        }
        else if (moment().isAfter(hour10)) {
            $("#timeblock17").addClass("past");
        }
        else {
            $("#timeblock17").addClass("future");
        };
    }

// Run colorTime function

setInterval(function () {
    $(".event-group .events").each(function (index, el) {
        colorTime(el);
    }, (1000 * 3600)); 
    // ^ Sets interval to refresh code every hour: 1000ms * 60 seconds * 60 minutes = 1 hour) 
})

console.log(currentTime);