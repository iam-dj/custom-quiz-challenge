// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Display current time
var currentTime = dayjs().format("MMMM D, YYYY");
$("#theDate").text(currentTime);



// Function to retrieve and display saved text from local storage
function retrieved() {
  var retrievedText = JSON.parse(localStorage.getItem("text1"));
  textArea1.val(retrievedText);
}
function retrievedTwo() {
  var retrievedText = JSON.parse(localStorage.getItem("text2"));
  textArea2.val(retrievedText);
}
function retrievedThree() {
  var retrievedText = JSON.parse(localStorage.getItem("text3"));
  textArea3.val(retrievedText);
}
function retrievedFour() {
  var retrievedText = JSON.parse(localStorage.getItem("text4"));
  textArea4.val(retrievedText);
}
function retrievedFive() {
  var retrievedText = JSON.parse(localStorage.getItem("text5"));
  textArea5.val(retrievedText);
}
function retrievedSix() {
  var retrievedText = JSON.parse(localStorage.getItem("text6"));
  textArea6.val(retrievedText);
}
function retrievedSeven() {
  var retrievedText = JSON.parse(localStorage.getItem("text7"));
  textArea7.val(retrievedText);
}
function retrievedEight() {
  var retrievedText = JSON.parse(localStorage.getItem("text8"));
  textArea8.val(retrievedText);
}
function retrievedNine() {
  var retrievedText = JSON.parse(localStorage.getItem("text9"));
  textArea9.val(retrievedText);
}

// var input = {
//   saveBtn1: {
//     Btn: $("#hour-1 .saveBtn"),
//     textarea: $("#hour-1 textarea"),
//     key: "text1"
//   },
//   saveBtn2: {
//     Btn: $("#hour-2 .saveBtn"),
//     textarea: $("#hour-2 textarea"),
//     key: "text2"
//   },
//   saveBtn3: {
//     Btn: $("#hour-3 .saveBtn"),
//     textarea: $("#hour-3 textarea"),
//     key: "text3"
//   },
//   saveBtn4: {
//     Btn: $("#hour-4 .saveBtn"),
//     textarea: $("#hour-4 textarea"),
//     key: "text4"
//   },
//   saveBtn5: {
//     Btn: $("#hour-5 .saveBtn"),
//     textarea: $("#hour-5 textarea"),
//     key: "text5"
//   },
//   saveBtn6: {
//     Btn: $("#hour-6 .saveBtn"),
//     textarea: $("#hour-6 textarea"),
//     key: "text6"
//   },
//   saveBtn7: {
//     Btn: $("#hour-7 .saveBtn"),
//     textarea: $("#hour-7 textarea"),
//     key: "text7"
//   },
//   saveBtn8: {
//     Btn: $("#hour-8 .saveBtn"),
//     textarea: $("#hour-8 textarea"),
//     key: "text8"
//   },
//   saveBtn9: {
//     Btn: $("#hour-9 .saveBtn"),
//     textarea: $("#hour-9 textarea"),
//     key: "text9"
//   }
// };


var saveButton1 = $("#hour-1 .saveBtn");
var saveButton2 = $("#hour-2 .saveBtn");
var saveButton3 = $("#hour-3 .saveBtn");
var saveButton4 = $("#hour-4 .saveBtn");
var saveButton5 = $("#hour-5 .saveBtn");
var saveButton6 = $("#hour-6 .saveBtn");
var saveButton7 = $("#hour-7 .saveBtn");
var saveButton8 = $("#hour-8 .saveBtn");
var saveButton9 = $("#hour-9 .saveBtn");

var textArea1 = $("#hour-1 textarea");
var textArea2 = $("#hour-2 textarea");
var textArea3 = $("#hour-3 textarea");
var textArea4 = $("#hour-4 textarea");
var textArea5 = $("#hour-5 textarea");
var textArea6 = $("#hour-6 textarea");
var textArea7 = $("#hour-7 textarea");
var textArea8 = $("#hour-8 textarea");
var textArea9 = $("#hour-9 textarea");

var div1 = $("#hour-1");
var div2 = $("#hour-2");
var div3 = $("#hour-3");
var div4 = $("#hour-4");
var div5 = $("#hour-5");
var div9 = $("#hour-6");
var div10 = $("#hour-7");
var div11 = $("#hour-8");
var div12 = $("#hour-9");

var divs = [div1, div2, div3, div4, div5, div9, div10, div11, div12];
var divTime = [9, 10, 12, 13, 14, 16, 17];


$(document).ready(function () {

  setInterval(function() {
    var timeNum = parseInt(dayjs().format('H'));
    console.log(timeNum); //15
    
    for (let index = 0; index < divs.length; index++) {
      if (timeNum == divTime[index]) {
        divs[index].addClass('present');
      } else if (timeNum < divTime[index]) {
        divs[index].addClass('future');
      } else {
        divs[index].addClass('past');
      }
    }
  }, 1000);

  retrieved();
  retrievedTwo();
  retrievedThree();
  retrievedFour();
  retrievedFive();
  retrievedSix();
  retrievedSeven();
  retrievedEight();
  retrievedNine();
  // checkCPF();
  // Call retrieved function when page loads


// Define the retrieved function that takes in the key and textarea element as parameters


  saveButton1.on("click", function (event) {
    event.preventDefault();
    var text = textArea1.val();
    localStorage.setItem("text1", JSON.stringify(text));
    console.log(text);
    retrieved("text1");
  });

  saveButton2.on("click", function (event) {
    event.preventDefault();
    var text2 = textArea2.val();
    localStorage.setItem("text2", JSON.stringify(text2));
    retrievedTwo();
  });

  saveButton3.on("click", function (event) {
    event.preventDefault();
    var text3 = textArea3.val();
    localStorage.setItem("text3", JSON.stringify(text3));
    retrievedThree();
  });

  saveButton4.on("click", function (event) {
    event.preventDefault();
    var text4 = textArea4.val();
    localStorage.setItem("text4", JSON.stringify(text4));
    retrievedFour();
  });

  saveButton5.on("click", function (event) {
    event.preventDefault();
    var text5 = textArea5.val();
    localStorage.setItem("text5", JSON.stringify(text5));
    retrievedFive();
  });

  saveButton6.on("click", function (event) {
    event.preventDefault();
    var text6 = textArea6.val();
    localStorage.setItem("text6", JSON.stringify(text6));
    retrievedSix();
  });

  saveButton7.on("click", function (event) {
    event.preventDefault();
    var text7 = textArea7.val();
    localStorage.setItem("text7", JSON.stringify(text7));
    retrievedSeven();
  });

  saveButton8.on("click", function (event) {
    event.preventDefault();
    var text8 = textArea8.val();
    localStorage.setItem("text8", JSON.stringify(text8));
    retrievedEight();
  });

  saveButton9.on("click", function (event) {
    event.preventDefault();
    var text9 = textArea9.val();
    localStorage.setItem("text9", JSON.stringify(text9));
    retrievedNine();
  });

  // if (currentTime.isb >= ninOclock && currentTime < tenOclock) {

  // pickDIV&SetCOlor.attr('backgroud-color', '#ff6961');}
});


// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
