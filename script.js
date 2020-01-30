$(document).ready(function () {


    // To imput the current date on the First block of the page

    var currentDate = $("#currentDate");
    // console.log(currentDate);

    var date = new Date();
    // console.log(date)

    var dateM = moment(date).format("dddd, MMMM Do YYYY")
    currentDate.text(dateM)


    // To get the divs to change color after time is past

    var area = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    // console.log(area)

    var hourIndex = parseInt(moment(date).format("H"));
    console.log(hourIndex)

    for (i = 0; i < area.length; i++) {

        var areaNumber = parseInt(area[i]);
        console.log("#" + areaNumber)

        if (hourIndex >= 18 && hourIndex <= 23) {
            $("#" + areaNumber).css("background-color", "rgb(27, 104, 104)");

        }

        else if (areaNumber < hourIndex && areaNumber >= 9 && areaNumber <= 17) {
            $("#" + areaNumber).css("background-color", "rgb(27, 104, 104)");

        }
    }

    for (i = 0; i < area.length; i++) {

        var areaNumber = parseInt(area[i]);

        if (areaNumber == hourIndex) {
            $("#" + areaNumber).css("background-color", "rgb(80, 255, 255)");
            $("#" + areaNumber).text("Start writing your ToDo's in the light green spots...");

        }
    }

    // To local storage

    // 9 am

    $("#save9am").click(function () {
        var comment = $.trim($("#9").val());
        if (comment != "") {
            // alert(comment);
            localStorage.setItem("ToDoAt9", JSON.stringify(comment));
            alert("Saved!")
        }

    });

    $("#9").val(localStorage.getItem("ToDoAt9"))


    // 10 am

    $("#save10am").click(function () {
        var comment = $.trim($("#10").val());
        if (comment != "") {
            // alert(comment);
            localStorage.setItem("ToDoAt10", JSON.stringify(comment));
            alert("Saved!")
        }

    });

    $("#10").val(localStorage.getItem("ToDoAt10"))


    // 11 am

    $("#save11am").click(function () {
        var comment = $.trim($("#11").val());
        if (comment != "") {
            // alert(comment);
            localStorage.setItem("ToDoAt11", JSON.stringify(comment));
            alert("Saved!")
        }

    });

    $("#11").val(localStorage.getItem("ToDoAt11"))


    // 12 pm

    $("#save12pm").click(function () {
        var comment = $.trim($("#12").val());
        if (comment != "") {
            // alert(comment);
            localStorage.setItem("ToDoAt12", JSON.stringify(comment));
            alert("Saved!")
        }

    });

    $("#12").val(localStorage.getItem("ToDoAt12"))


    // 1 pm

    $("#save1pm").click(function () {
        var comment = $.trim($("#13").val());
        if (comment != "") {
            // alert(comment);
            localStorage.setItem("ToDoAt1", JSON.stringify(comment));
            alert("Saved!")
        }

    });

    $("#13").val(localStorage.getItem("ToDoAt1"))


    // 2 pm

    $("#save2pm").click(function () {
        var comment = $.trim($("#14").val());
        if (comment != "") {
            // alert(comment);
            localStorage.setItem("ToDoAt2", JSON.stringify(comment));
            alert("Saved!")
        }

    });

    $("#14").val(localStorage.getItem("ToDoAt2"))


    // 3 pm

    $("#save3pm").click(function () {
        var comment = $.trim($("#15").val());
        if (comment != "") {
            // alert(comment);
            localStorage.setItem("ToDoAt3", JSON.stringify(comment));
            alert("Saved!")
        }

    });

    $("#15").val(localStorage.getItem("ToDoAt3"))


    // 4 pm

    $("#save4pm").click(function () {
        var comment = $.trim($("#16").val());
        if (comment != "") {
            // alert(comment);
            localStorage.setItem("ToDoAt4", JSON.stringify(comment));
            alert("Saved!")
        }

    });

    $("#16").val(localStorage.getItem("ToDoAt4"))


    // 5 pm

    $("#save5pm").click(function () {
        var comment = $.trim($("#17").val());
        if (comment != "") {
            // alert(comment);
            localStorage.setItem("ToDoAt5", JSON.stringify(comment));
            alert("Saved!")
        }

    });

    $("#17").val(localStorage.getItem("ToDoAt5"))

    //Clear Scheduler

    $(".clearButton").click(function () {
        var confirmV = confirm("Are you sure you want to delete your Todos?")

        switch (confirmV) {
            case true:
                localStorage.clear();
                location.reload(true);

        }

    })


})

