//______________________________LEAFLET VARIABLES______________________________________________________________________________________________
//MAP OBJECT: Used to render the initial map of NYC.
var map = L.map("mapid").setView([40.77, -73.99], 12);

//ACCESS TOKEN: This is what will be used by the Ajax call to retrive the lat/long for the user entered zip code.
var accessToken = 'sk.eyJ1IjoibXNoaXdyYXRhbjg4IiwiYSI6ImNqb2Ywc2g2NzAydHcza2xqNzMyMXE1N3gifQ.245Qhtto4LSUwvYByTpZmg';

//LEAFLET METHOD FOR MAP DISPLAY: This uses the map object mentioned above in the method addTo(map). 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + accessToken, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
}).addTo(map);



//_____________________________FIREBASE VARIABLES______________________________________________________________________________________________
//INITIALIZE FIREBASE: Firebase database was created and the following the configuration was
//copied/pasted from the Users Authentication tab for the respective database.
//Vendor entered information will be saved here for display later on on user page.
var config = {
    apiKey: "AIzaSyAtDIitolx33OIPaqziRfVfvWYWS0MY5Ik",
    authDomain: "group-project-1-2127f.firebaseapp.com",
    databaseURL: "https://group-project-1-2127f.firebaseio.com",
    projectId: "group-project-1-2127f",
    storageBucket: "group-project-1-2127f.appspot.com",
    messagingSenderId: "525088904938"
};
firebase.initializeApp(config);

//FIREBASE DATABASE REFERENCE
var database = firebase.database();

//INTITIAL FIREBASE VALUES
var vendorChild = "";
var venueName = "";
var vendorAddress = "";
var vendorZip = "";
var vendorCapacity = "";
var vendorDetail = "";
var vendorEmail = "";



//_____________________________MAP DISPLAY____________________________________________________________________________________________________
//MAP RENDERING: This is the code that must be called for mapped location to be displayed to the page. User entered zip code is captured here.
//The lat/long for the zip code is obtained here from an AJAX call. 
function renderMap() {

    //DEFAULT ZIP CODE AND LAT/LONG: This is the zip code and lat/long that will be displayed when the user first navigates to the page.
    //These variables will be updated once the user enters the zip code of their choice.
    var zipCode = "";
    var mapLongitude = "";
    var mapLatitude = "";

    //ON CLICK EVENT FOR ZIPCODE SUBMIT BUTTON BEGINS HERE
    $("#zipCodeSubmit").on("click", function (event) {                          //1.Submit button is clicked.
        event.preventDefault();                                                 //2.This will prevent default.
                                                      
        var enteredZipCode = $("#zipCodeInput").val().trim();                   //3.User entered zip code will be stored in this variable.
        zipCode = enteredZipCode;                                               //4.Default zip code will be updated with the user entered zip code.
        $("#zipCodeInput").val("");                                             //5.Zip code text box on the html page will be cleared.

        //QUERY URL
        var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
            + zipCode
            + ".json?access_token="
            + accessToken
            + "&cachebuster=1542175693377&autocomplete=true&types=postcode&limit=1"

        //AJAX CALL FOR LAT/LONG ENTERED BY USER BEGINS HERE    
        $.ajax({
            url: queryURL,                                                  //1.Specify query URL from above.
            method: "GET"                                                   //2.Declare 'GET' method to obtain data from the request.


        }).then(function (response) {                                       //Create function to do the following:
            console.log("INSIDE CALL Zip Code: " + zipCode);
            var longitude = response.features[0].center[0];                 //1.Get the longitude value and store in variable
            mapLongitude = longitude;
            console.log("INSIDE CALL Long: " + mapLongitude);

            var latitude = response.features[0].center[1];                  //2.Get the latitude value and store in variable 
            mapLatitude = latitude;
            console.log("INSIDE CALL Lat: " + mapLatitude);

            var mapZoom = 15;                                               //3.Specify the map zoom and store in variable
            map.setView([mapLatitude, mapLongitude], mapZoom);              //4.Use Leaflet map method to create mymap variable (where lat, long and zoom is used)


            console.log("Zip Code: " + zipCode);
            console.log("Long: " + mapLongitude);
            console.log("Lat: " + mapLatitude);
        });

    });

}


//FIREBASE VENDOR QUERY BY ZIP CODE BEGINS HERE
        //ON CLICK EVENT: Once submit button is clicked the zip code information entered will
        //be saved and data will be called/ displayed from Firebase.
        $("#zipCodeSubmit").on("click", function (event) {
            event.preventDefault();

            //User entered zipcode is saved in the following variable and console.logged
            var firebaseZipCode = $("#zipCodeInput").val().trim();
            console.log("Zip Code Entered: " + firebaseZipCode);

            //FUNCTION TO ACCESS FIREBASE: This function will use the snapshot method to first check
            //Firebase for a zip code that matches then set the variable values listed above.
            // database.ref().orderByChild("details").equalTo(firebaseZipCode).on("value", function (snapshot) {

            var query = firebase.database().ref().orderByKey();
            query.once("value")
                .then(function (snapshot) {
                    snapshot.forEach(function (childSnapshot) {
                        var key = childSnapshot.key;
                        console.log(key);

                        //VENDOR VARIABLES
                        var vendorDataBase = snapshot.val();
                        var vendorChild = snapshot.child(key);
                        var venueName = vendorChild.val().name;
                        var vendorAddress = vendorChild.val().location;
                        var vendorZip = vendorChild.val().details;
                        var vendorCapacity = vendorChild.val().number;
                        var vendorDetail = vendorChild.val().description;
                        var vendorEmail = vendorChild.val().email;

                        //RETURNED VENDOR INFORMATION IF ZIP CODE MATCHES
                        if (vendorZip === firebaseZipCode) {
                            console.log(vendorDataBase);
                            console.log(vendorChild);
                            console.log("Venue Name: " + venueName);
                            console.log("Street Address: " + vendorAddress);
                            console.log("Zip Code: " + vendorZip);
                            console.log("Max Capacity: " + vendorCapacity);
                            console.log("Description: " + vendorDetail);
                            console.log("Contact Email: " + vendorEmail);
                        }

                        //RETURNED IF NO ZIP CODE MATCH: This alert is currently not working ****************
                        else {
                            alert("No vendors found within the zipcode " + firebaseZipCode + ".")
                        }
                    });
                });

        });

//CALL RENDER MAP FUNCTION
renderMap();