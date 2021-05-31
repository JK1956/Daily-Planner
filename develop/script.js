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

// Create classes for each plan in localstorage

$.each(hourBlock, function (index, value) {
    plans 
  $(".container").append("<div class='row'><div class='col-1 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-10 event-group' id='timeblock" +
        (index + 9) + "'><textarea class='events col-10' id='eventblock" + (index + 9) + "'>" + plans[index] + "</textarea></div>" +
        "<div class='col-1 save-delete saveBtn' id='save-delete" + (index + 9) + "'><i class='fas fa-save hover' title='Save Event'></i> <i class='fas fa-trash hover' title='Remove Event'></i></div></div></div>");
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

// Save plans to localstorage

$("#save-delete9").on("click", "i.fa-save", function () {
    var event9 = $("#eventblock9").val().trim();
    localStorage.setItem('hour1', JSON.stringify(event9));
})
$("#save-delete10").on("click", "i.fa-save", function () {
    var event10 = $("#eventblock10").val().trim();
    localStorage.setItem('hour2', JSON.stringify(event10));
})
$("#save-delete11").on("click", "i.fa-save", function () {
    var event11 = $("#eventblock11").val().trim();
    localStorage.setItem('hour3', JSON.stringify(event11));
})
$("#save-delete12").on("click", "i.fa-save", function () {
    var event12 = $("#eventblock12").val().trim();
    localStorage.setItem('hour4', JSON.stringify(event12));
})
$("#save-delete13").on("click", "i.fa-save", function () {
    var event13 = $("#eventblock13").val().trim();
    localStorage.setItem('hour5', JSON.stringify(event13));
})
$("#save-delete14").on("click", "i.fa-save", function () {
    var event14 = $("#eventblock14").val().trim();
    localStorage.setItem('hour6', JSON.stringify(event14));
})
$("#save-delete15").on("click", "i.fa-save", function () {
    var event15 = $("#eventblock15").val().trim();
    localStorage.setItem('hour7', JSON.stringify(event15));
})
$("#save-delete16").on("click", "i.fa-save", function () {
    var event16 = $("#eventblock16").val().trim();
    localStorage.setItem('hour8', JSON.stringify(event16));
})
$("#save-delete17").on("click", "i.fa-save", function () {
    var event17 = $("#eventblock17").val().trim();
    localStorage.setItem('hour9', JSON.stringify(event17));
})

// Delete plans from local storage

$("#save-delete9").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour1");
    $("#eventblock9").val("");
})
$("#save-delete10").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour2");
    $("#eventblock10").val("");
})
$("#save-delete11").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour3");
    $("#eventblock11").val("");
})
$("#save-delete12").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour4");
    $("#eventblock12").val("");
})
$("#save-delete13").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour5");
    $("#eventblock13").val("");
})
$("#save-delete14").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour6");
    $("#eventblock14").val("");
})
$("#save-delete15").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour7");
    $("#eventblock15").val("");
})
$("#save-delete16").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour8");
    $("#eventblock16").val("");
})
$("#save-delete17").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour9");
    $("#eventblock17").val("");
})

// Run colorTime function

setInterval(function () {
    $(".event-group .events").each(function (index, el) {
        colorTime(el);
    }, (1000 * 3600)); 
    // ^ Sets interval to refresh code every hour: 1000ms * 60 seconds * 60 minutes = 1 hour) 
})

colorTime();