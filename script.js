
$(document).ready(function(){

// To imput the current date on the First block of the page

var currentDate = $("#currentDate");
// console.log(currentDate);

var date = new Date();
// console.log(date)

var dateM = moment(date).format("dddd, MMMM Do YYYY")
currentDate.text(dateM)


// To get the divs to change color after time is past

var currentHourM = moment(date).format("hA")
console.log(currentHourM)

switch (currentHourM) {

    case "9AM":
        $("#9").css("background-color", "rgb(80, 255, 255)") ;
        $("#9").html(" ") ;
        $("#9").css("placeholder", "") ;
        break;
    case "10AM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(80, 255, 255)") ;
        break;
    case "11AM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(80, 255, 255)") ;
        break;
    case "12PM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(27, 104, 104)") ;
        $("#12").css("background-color", "rgb(80, 255, 255)") ;
        break;
    case "1PM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(27, 104, 104)") ;
        $("#12").css("background-color", "rgb(27, 104, 104)") ;
        $("#1").css("background-color", "rgb(80, 255, 255)") ;
        break;
    case "2PM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(27, 104, 104)") ;
        $("#12").css("background-color", "rgb(27, 104, 104)") ;
        $("#1").css("background-color", "rgb(27, 104, 104)") ;
        $("#2").css("background-color", "rgb(80, 255, 255)") ;
        break;
    case "3PM":
        $("#9").css("background-color", "rgb(27, 104, 104)") ;
        $("#9").html(" ") ;
        $("#10").css("background-color", "rgb(27, 104, 104)") ;
        $("#11").css("background-color", "rgb(27, 104, 104)") ;
        $("#12").css("background-color", "rgb(27, 104, 104)") ;
        $("#1").css("background-color", "rgb(27, 104, 104)") ;
        $("#2").css("background-color", "rgb(27, 104, 104)") ;
        $("#3").css("background-color", "rgb(80, 255, 255)") ;
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
        $("#4").css("background-color", "rgb(80, 255, 255)") ;
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
        $("#5").css("background-color", "rgb(80, 255, 255)") ;
        break;
    case "6PM":
    case "7PM":
    case "8PM":
    case "9PM": 
    case "10PM":
    case "11PM":
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


// 9 am

$("#save9am").click(function(){
    var comment = $.trim($("#9").val());
    if(comment != ""){
        // alert(comment);
        localStorage.setItem("ToDoAt9", JSON.stringify(comment));
        alert("Saved!")
    }
    
});

$("#9").val(localStorage.getItem("ToDoAt9"))


// 10 am

$("#save10am").click(function(){
    var comment = $.trim($("#10").val());
    if(comment != ""){
        // alert(comment);
        localStorage.setItem("ToDoAt10", JSON.stringify(comment));
        alert("Saved!")
    }
    
});

$("#10").val(localStorage.getItem("ToDoAt10"))


// 11 am

$("#save11am").click(function(){
    var comment = $.trim($("#11").val());
    if(comment != ""){
        // alert(comment);
        localStorage.setItem("ToDoAt11", JSON.stringify(comment));
        alert("Saved!")
    }
    
});

$("#11").val(localStorage.getItem("ToDoAt11"))


// 12 pm

$("#save12pm").click(function(){
    var comment = $.trim($("#12").val());
    if(comment != ""){
        // alert(comment);
        localStorage.setItem("ToDoAt12", JSON.stringify(comment));
        alert("Saved!")
    }
    
});

$("#12").val(localStorage.getItem("ToDoAt12"))


// 1 pm

$("#save1pm").click(function(){
    var comment = $.trim($("#1").val());
    if(comment != ""){
        // alert(comment);
        localStorage.setItem("ToDoAt1", JSON.stringify(comment));
        alert("Saved!")
    }
    
});

$("#1").val(localStorage.getItem("ToDoAt1"))

// 2 pm

$("#save2pm").click(function(){
    var comment = $.trim($("#2").val());
    if(comment != ""){
        // alert(comment);
        localStorage.setItem("ToDoAt2", JSON.stringify(comment));
        alert("Saved!")
    }
    
});

$("#2").val(localStorage.getItem("ToDoAt2"))

 
// 3 pm

$("#save3pm").click(function(){
    var comment = $.trim($("#3").val());
    if(comment != ""){
        // alert(comment);
        localStorage.setItem("ToDoAt3", JSON.stringify(comment));
        alert("Saved!")
    }
    
});

$("#3").val(localStorage.getItem("ToDoAt3"))


// 4 pm

$("#save4pm").click(function(){
    var comment = $.trim($("#4").val());
    if(comment != ""){
        // alert(comment);
        localStorage.setItem("ToDoAt4", JSON.stringify(comment));
        alert("Saved!")
    }
    
});

$("#4").val(localStorage.getItem("ToDoAt4"))


// 5 pm

$("#save5pm").click(function(){
    var comment = $.trim($("#5").val());
    if(comment != ""){
        // alert(comment);
        localStorage.setItem("ToDoAt5", JSON.stringify(comment));
        alert("Saved!")
    }
    
});

$("#5").val(localStorage.getItem("ToDoAt5"))

//Clear Scheduler

$(".clearButton").click(function(){
    var confirmV = confirm("Are you sure you want to delete your Todos?")
    
    switch (confirmV){
    case true:
    localStorage.clear();
    location.reload(true);

}

})


})

