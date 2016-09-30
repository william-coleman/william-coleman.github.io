$(document).ready(function () {


    var darksky = "https://api.darksky.net/forecast/4311ab1294f77e402cc0b478b55f4451/";
    var base = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var gogKey = "&key=AIzaSyDYk1ZhkQ8NdkiNQH8rVWCBdAjwY2cvcyk";
    var pikeville = "https://maps.googleapis.com/maps/api/geocode/json?address=41501&key=AIzaSyDYk1ZhkQ8NdkiNQH8rVWCBdAjwY2cvcyk";


    $("#zipBut").click(function () {
        var urlG = base + $(zip).val() + gogKey;
        $.ajax(urlG, { method: "GET" }).done(function (data) {
            console.log(data.results[0].geometry.location);
            var place = data.results[0].formatted_address;
            var lat = data.results[0].geometry.location.lat;
            var long = data.results[0].geometry.location.lng;
            var urlD = darksky + lat + "," + long;
            // callback(place);

            $.ajax(urlD, { method: "Post", dataType: "jsonp" }).done(function (data) {
                var temp = data.currently.temperature;
                var overal = data.currently.summary;
                var chance = data.currently.precipProbability;
                $("#firstcol").html(place);
                $("#secondcol").html(Math.ceil(temp) + "&#8457;");
                $("#thirdcol").html(overal);
                $("#fourthcol").html("Rain Chance: " + (chance*100) + "&#37;");
                });
            });
        });
    });
