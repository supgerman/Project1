var uploadTask;

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

// make this a global variable for purposes of obtaining URL image data from firebase (code below)
const newVendor = {}

// 2. Button for adding input
$("#click-button").on("click", function(event) {
    event.preventDefault(event);

    // Grabs user input
    newVendor.name = $("#venue-name-input").val();
    newVendor.location = $("#address-input").val();
    newVendor.details = $("#zip-input").val(); 
    newVendor.number = $("#capacity-input").val();
    newVendor.description = $("#description-input").val();
    newVendor.email = $("#vendor-email-input").val();
   
    
 // removed the .trim() at the end of all these as I kept getting a console error

 // Uploads vendor input to the database
 database.ref().push(newVendor);

//  Logs everything to console
//  console.log(newVendor.venueName);
//  console.log(newVendor.vendorAddress);
//  console.log(newVendor.vendorZip);
//  console.log(newVendor.vendorCapacity);
//  console.log(newVendor.vendorDetail);
//  console.log(newVendor.vendorEmail);


//  alert("vendor successfully added");


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
});

    

//   get Elements------THIS IS THE WORKING CODE FOR THE PHOTO UPLOAD----------------
var uploader = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");

// Listen for file selection
fileButton.addEventListener("change", function(e){
    // get file
    var file = e.target.files[0];

    // create a storage ref
    var storageRef = firebase.storage().ref("venue_images/" + file.name);

    // upload file- the put method will upload the file to firebase storage. adding the task variable helps you can an eye on the progress
    // var task = storageRef.put(file);
    var uploadTask = storageRef.put(file);
    var data = $("<img>").append(file);
    // //   // Append the image to the body
    $("body").append(data);

    uploadTask.on("state_changed", function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = progress;
                console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or ‘paused’
                console.log("Upload is paused");
            break;
            case firebase.storage.TaskState.RUNNING: // or ‘running’
            console.log("Upload is running");
            break;
        }
    }, function(error) {
     // Handle unsuccessful uploads
    }, function() {
     // Handle successful uploads on complete
     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log("File available at", downloadURL);
        newVendor.imageUrl = downloadURL;
        console.log(newVendor.imageUrl);

        
     });
    });
});






    


