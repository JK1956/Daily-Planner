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

// create array of plans in timeblock storage

var plans = [plan1, plan2, plan3, plan4, plan5, plan6, plan7, plan8, plan9];

// save plans to local storage

$.each(hourBlock, function (index, value) {
    plans 
  $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
        (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + plans[index] + "</textarea></div>" +
        "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});