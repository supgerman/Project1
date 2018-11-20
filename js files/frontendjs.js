
<<<<<<< HEAD

=======
>>>>>>> f67a054727b65e58f559817426015e047e9636a8
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
<<<<<<< HEAD
}

var zipCode = 10019;



//ACCESS TOKEN AND QUERY URL: This is what will be used by the Ajax call to retrive the lat/long for the user entered zip code.
var accessToken =  'sk.eyJ1IjoibXNoaXdyYXRhbjg4IiwiYSI6ImNqb2Ywc2g2NzAydHcza2xqNzMyMXE1N3gifQ.245Qhtto4LSUwvYByTpZmg';
var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" 
        + zipCode 
        + ".json?access_token=" 
        + accessToken 
        + "&cachebuster=1542175693377&autocomplete=true&types=postcode&limit=1"



    //AJAX CALL BEGINS HERE    
    $.ajax({
        url: queryURL,                                                      //Specify query URL from above.
        method: "GET"                                                       //Declare 'GET' method to obtain data from the request.


    }).then(function(response){                                             //Create function to do the following:
        var longitude = response.features[0].center[0];                     //  1. Get the longitude value and store in variable
        console.log("Longitude:" + response.features[0].center[0]);

        var latitude = response.features[0].center[1];                      //  2. Get the latitude value and store in variable 
        console.log("Longitude:" + response.features[0].center[1]);

        var mapZoom = 12;                                                   //  3. Specify the map zoom and store in variable
        var mymap = L.map('mapid').setView([latitude, longitude], mapZoom); //  4. Use Leaflet map method to create mymap variable (where lat, long and zoom is used)

                                                                            //  5. Use Leaflet tileLayer method to display the map using the lat, long and zoom specified

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+accessToken, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets',
        }).addTo(mymap);
    });


     
  
  
  
=======
}
>>>>>>> f67a054727b65e58f559817426015e047e9636a8
