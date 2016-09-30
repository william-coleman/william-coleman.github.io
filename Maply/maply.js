$(document).ready(function () {

    var gogbase = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var gogKey = "&key=AIzaSyDYk1ZhkQ8NdkiNQH8rVWCBdAjwY2cvcyk";
    var mapbase = "https://maps.googleapis.com/maps/api/staticmap?center="
    var mapKey = "AIzaSyCeAd848VTpWFfRAHL1bxZNekb1inj9gMY"

    $("#mapBut").click(function () {
        var urlG = gogbase + $("#location").val() + gogKey;
        $.ajax(urlG, { method: "GET" }).done(function (data) {
            console.log(data.results[0].geometry.location);
            var place = data.results[0].formatted_address;
            var lat = data.results[0].geometry.location.lat;
            var long = data.results[0].geometry.location.lng;
            console.log(place + " " + lat + " " + long )
            var urlM = mapbase + lat + "," + long + mapKey;
            $("#mapImage").html(urlM);
        });
        });
    });

