// {/* <script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script> */}
 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAtDIitolx33OIPaqziRfVfvWYWS0MY5Ik",
    authDomain: "group-project-1-2127f.firebaseapp.com",
    databaseURL: "https://group-project-1-2127f.firebaseio.com",
    projectId: "group-project-1-2127f",
    storageBucket: "group-project-1-2127f.appspot.com",
    messagingSenderId: "525088904938"
  };
    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();


  // 2. Button for adding input
    $("#click-button").on("click", function(event) {
    event.preventDefault(event);

    // Grabs user input
    var venueName = $("#venue-name-input").val();
    var vendorAddress = $("#address-input").val();
    var vendorZip = $("#zip-input").val(); 
    var vendorCapacity = $("#capacity-input").val();
    var vendorDetail = $("#description-input").val();
    var vendorEmail = $("#vendor-email-input").val();
    
 // removed the .trim() at the end of all these as I kept getting a console error

 // Creates local "temporary" object for holding vendor input
    var newVendor  = {
    name: venueName,
    location: vendorAddress,
    details: vendorZip,
    number: vendorCapacity,
    description: vendorDetail,
    email: vendorEmail
 };

 // Uploads vendor input to the database
 database.ref().push(newVendor);

//  Logs everything to console
 console.log(newVendor.venueName);
 console.log(newVendor.vendorAddress);
 console.log(newVendor.vendorZip);
 console.log(newVendor.vendorCapacity);
 console.log(newVendor.vendorDetail);
 console.log(newVendor.vendorEmail);

 alert("vendor successfully added");

 // Clears all of the text-boxes
 $("#venue-name-input").val("");
 $("#address-input").val("");
 $("#zip-input").val("");
 $("#capacity-input").val("");
 $("#description-input").val("");
 $("#vendor-email-input").val("");
});

// // 3. Create Firebase event for adding vendor to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
  
    var venueName = snapshot.val().name;
    var vendorAddress = snapshot.val().location;
    var vendorZip = snapshot.val().details;
    var vendorCapacity = snapshot.val().number;
    var vendorDetail = snapshot.val().description;
    var vendorEmail = snapshot.val().email;

    console.log(venueName);
    console.log(vendorAddress);
    console.log(vendorZip);
    console.log(vendorCapacity);
    console.log(vendorDetail);
    console.log(vendorEmail);

    //   // Create the new row
    // var data = $("<p>").append(
    //     $("#venue-name-input").text(venueName),
    //     $(".contactUsH3").text(vendorAddress),
    //     $(".contactUsH4").text(vendorZip),
    //     $("#capacity-input").text(vendorCapacity),
    //     $("#description-input").text(vendorDetail),
    //     $("#email-input").text(vendorEmail)
      // );
    
    // //   // Append the new row to the table
      // $("#form-body").append(data);
    });

    //   get Elements
var uploader = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");

// Listen for file selection
fileButton.addEventListener("change", function(e){
    // get file
    var file = e.target.files[0];

    // create a storage ref
    var storageRef = firebase.storage().ref("venue_images/" + file.name);


    // upload file- the put method will upload the file to firebase storage. adding the task variable helps you can an eye on the progress

    var task = storageRef.put(file);
    var data = $("<img>").append(file);
    // //   // Append the image to the body
    $("body").append(data);

    // update progress bar

    task.on("state_changed",
        function progress(snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },

        function error(err){

        },

        function complete(){

        }
    );
});

    


