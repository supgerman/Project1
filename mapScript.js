//DEFAULT ZIP CODE AND LAT/LONG: This is the zip code and lat/long that will be displayed when the user first navigates to the page.
//These variables will be updated once the user enters the zip code of their choice.
var zipCode = "";
var mapLongitude = "";
var mapLatitude = "";

var map = L.map("mapid").setView([0,0],15)

//MAP RENDERING: This is the code that must be called for map to be displayed to the page. User entered zip code is captured here.
//The lat/long for the zip code is obtained here as well using an AJAX call. 
function renderMap() {

    var accessToken =  'sk.eyJ1IjoibXNoaXdyYXRhbjg4IiwiYSI6ImNqb2Ywc2g2NzAydHcza2xqNzMyMXE1N3gifQ.245Qhtto4LSUwvYByTpZmg';

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+accessToken, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets',
        }).addTo(map);

//ON CLICK EVENT FOR ZIPCODE SUBMIT

$("#zipCodeSubmit").on("click", function(event) {                           //1.Submit button is clicked.
    event.preventDefault();                                                 //2.This will prevent default.
    var enteredZipCode = $("#zipCodeInput").val().trim();                   //3.User entered zip code will be stored in this variable.
    zipCode = enteredZipCode;                                               //4.Default zip code will be updated with the user entered zip code.
    $("#zipCodeInput").val("");                                             //5.Zip code text box on the html page will be cleared.

    var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" 
        + zipCode 
        + ".json?access_token=" 
        + accessToken 
        + "&cachebuster=1542175693377&autocomplete=true&types=postcode&limit=1"
//ACCESS TOKEN AND QUERY URL: This is what will be used by the Ajax call to retrive the lat/long for the user entered zip code.


    //AJAX CALL BEGINS HERE    
    $.ajax({
        url: queryURL,                                                      //1.Specify query URL from above.
        method: "GET"                                                       //2.Declare 'GET' method to obtain data from the request.


    }).then(function(response){                                             //Create function to do the following:
        console.log("INSIDE CALL Zip Code: " + zipCode);
        var longitude = response.features[0].center[0];                     //1.Get the longitude value and store in variable
        mapLongitude = longitude;
        console.log("INSIDE CALL Long: " + mapLongitude);

        var latitude = response.features[0].center[1];                      //2.Get the latitude value and store in variable 
        mapLatitude = latitude;
        console.log("INSIDE CALL Lat: " + mapLatitude);

        // console.log(L.map("mapid").setView([mapLatitude, mapLongitude], mapZoom));
        var mapZoom = 15;                                                   //3.Specify the map zoom and store in variable
        map.setView([mapLatitude, mapLongitude], mapZoom); //4.Use Leaflet map method to create mymap variable (where lat, long and zoom is used)

                                                                            //5.Use Leaflet tileLayer method to display the map using the lat, long and zoom specified

        // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+accessToken, {
        // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        // id: 'mapbox.streets',
        // }).addTo(mymap);

    console.log("Zip Code: " + zipCode);
    console.log("Long: " + mapLongitude);
    console.log("Lat: " + mapLatitude);
    });
 
});

}

renderMap();

//MS NOTES: Lat/Long within outside of the render function is incorrect. It does not appear to be changing when the user clicks the submit button.