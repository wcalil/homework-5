
$(document).ready(function(){

// To imput the current date on the First block of the page

var currentDate = $("#currentDate");
// console.log(currentDate);

var date = new Date();
// console.log(date)

var dateM = moment(date).format("dddd, MMMM Do YYYY")
currentDate.text(dateM)


// To get the divs to change color after time is past



// $( ".amPm" ).each(function( index ) {
//     console.log( index + ": " + $( this ).text());
//   });

// $( ".amPm" ).each(function( index ) {
//   var time = index + ": " + $( this ).text();
//   console.log(time[0])
//   });

var currentHourM = moment(date).format("hA")
console.log(currentHourM)

switch (currentHourM) {
    case "9AM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#9").css("placeholder", "") ;
        break;
    case "10AM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        break;
    case "11AM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(27, 104, 104)") ;
        break;
    case "12PM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(27, 104, 104)") ;
        $("#12").css("background-color", "rgb(27, 104, 104)") ;
        break;
    case "1PM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(27, 104, 104)") ;
        $("#12").css("background-color", "rgb(27, 104, 104)") ;
        $("#1").css("background-color", "rgb(27, 104, 104)") ;
        break;
    case "2PM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(27, 104, 104)") ;
        $("#12").css("background-color", "rgb(27, 104, 104)") ;
        $("#1").css("background-color", "rgb(27, 104, 104)") ;
        $("#2").css("background-color", "rgb(27, 104, 104)") ;
        break;
    case "3PM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(27, 104, 104)") ;
        $("#12").css("background-color", "rgb(27, 104, 104)") ;
        $("#1").css("background-color", "rgb(27, 104, 104)") ;
        $("#2").css("background-color", "rgb(27, 104, 104)") ;
        $("#3").css("background-color", "rgb(27, 104, 104)") ;
        break;
    case "4PM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(27, 104, 104)") ;
        $("#12").css("background-color", "rgb(27, 104, 104)") ;
        $("#1").css("background-color", "rgb(27, 104, 104)") ;
        $("#2").css("background-color", "rgb(27, 104, 104)") ;
        $("#3").css("background-color", "rgb(27, 104, 104)") ;
        $("#4").css("background-color", "rgb(27, 104, 104)") ;
        break;
    case "5PM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(27, 104, 104)") ;
        $("#12").css("background-color", "rgb(27, 104, 104)") ;
        $("#1").css("background-color", "rgb(27, 104, 104)") ;
        $("#2").css("background-color", "rgb(27, 104, 104)") ;
        $("#3").css("background-color", "rgb(27, 104, 104)") ;
        $("#4").css("background-color", "rgb(27, 104, 104)") ;
        $("#5").css("background-color", "rgb(27, 104, 104)") ;
  }


// To local storage



var storedToDo9am = " ";
var ToDos9am = $("#9");

$("#save9am").click(function(){
    var comment = $.trim($("#9").val());
    if(comment != ""){
        // alert(comment);
        var storedToDo9am = localStorage.setItem("ToDoAt9", JSON.stringify(comment));
        alert("Saved!")
    }

    
});

    $("#9").val(localStorage.getItem("ToDoAt9"))


})