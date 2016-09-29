var set1 = Math.floor((Math.random() * 9) + 0);
var set2 = Math.floor((Math.random() * 9) + 0);
var set3 = Math.floor((Math.random() * 9) + 0);

var chances = 10;

console.log(set1, set2, set3);

while (set1 == set2 || set1 == set3 || set2 == set3) {
    var set1 = Math.floor((Math.random() * 9) + 0);
    var set2 = Math.floor((Math.random() * 9) + 0);
    var set3 = Math.floor((Math.random() * 9) + 0);
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    } else {
        return true;
    }
};

console.log(set1, set2, set3);

$(document).ready(function () {

    $(".Testing").click(function () {
        var Num1 = $("#field1").val();
        var Num2 = $("#field2").val();
        var Num3 = $("#field3").val();

        console.log(Num1);

        $("#results1").html(Num1);
        if (!field1) return;

        if (Num1 == set1) {
            return $("#results1").css("color", "lime");
        } else if (Num1 == set2) {
            return $("#results1").css("color", "yellow");
        } else if (Num1 == set3) {
            return $("#results1").css("color", "yellow");
        } else {
            return $("#results1").css("color", "red");
        }
    });
    $(".Testing2").click(function () {
        var Num1 = $("#field1").val();
        var Num2 = $("#field2").val();
        var Num3 = $("#field3").val();

        console.log(Num2);

        $("#results2").html(Num2);
        if (!field2) return;

        if (Num2 == set2) {
            return $("#results2").css("color", "lime");
        } else if (Num2 == set1) {
            return $("#results2").css("color", "yellow");
        } else if (Num2 == set3) {
            return $("#results2").css("color", "yellow");
        } else {
            return $("#results2").css("color", "red");
        }
    });

    $(".Testing3").click(function () {
        var Num1 = $("#field1").val();
        var Num2 = $("#field2").val();
        var Num3 = $("#field3").val();

        console.log(Num3);

        $("#results3").html(Num3);
        if (!field3) return;

        if (Num3 == set3) {
            return $("#results3").css("color", "lime");
        } else if (Num3 == set1) {
            return $("#results3").css("color", "yellow");
        } else if (Num3 == set2) {
            return $("#results3").css("color", "yellow");
        } else {
            return $("#results3").css("color", "red");
        }
    });
    $(".Testing").click(function win() {
        var Num1 = $("#field1").val();
        var Num2 = $("#field2").val();
        var Num3 = $("#field3").val();

        if (Num1 == set1 && Num2 == set2 && Num3 == set3) {
            alert("You've Won!!");
            location.reload();
        }
    });
    $(".Testing").click(function trysLeft() {
        chances = chances - 1;
        while (chances <= -1) {
            alert("FAILURE, the asnwer was " + set1 + " " + set2 + " " + set3);
            location.reload();
            return;
        }
        console.log("You have " + chances + " chance(s) left.");
        $("#tries").html("You have " + chances + " chance(s) left.")
    });




});


