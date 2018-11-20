

var storageRef;
var venueName;
var vendorAddress;
var vendorZip;
var vendorCapacity;
var vendorDetail;
var vendorEmail;
var firebaseSnapshot;

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

  // Creates local "temporary" object for holding vendor input
 var newVendor  = {
     name: venueName,
     location: vendorAddress,
     details: vendorZip,
     number: vendorCapacity,
     description: vendorDetail,
     email: vendorEmail
  };

  // // 3. Create Firebase event for adding vendor to the database and a row in the text when a user adds an entry
database.ref().on("child_added", function(snapshot) {
 firebaseSnapshot = snapshot;
//  console.log("firebase data: ", firebaseSnapshot);
//  console.log(snapshot.val());

 var venueName = snapshot.val().name;
 var vendorAddress = snapshot.val().location;
 var vendorZip = snapshot.val().details;
 var vendorCapacity = snapshot.val().number;
 var vendorDetail = snapshot.val().description;
 var vendorEmail = snapshot.val().email;

//  console.log(venueName);
//  console.log(vendorAddress);
//  console.log(vendorZip);
//  console.log(vendorCapacity);
//  console.log(vendorDetail);
//  console.log(vendorEmail);





//   // Create the new list
var data = $("<ul>").append(
  $("<li>").text("Venue Name: " + venueName),
  $("<li>").text("Address: " + vendorAddress),
  $("<li>").text("Zip: " + vendorZip),
  $("<li>").text("Max Capacity: " + vendorCapacity),
  $("<li>").text("Venue Description: " + vendorDetail),
  $("<li>").text("Email: " + vendorEmail)
);

// //   // Append the new row to the table
$("#container").append(data);


});



//     var data = $("<td>").append(
//    $("#venue-name-input").append("Venue Name:  " + venueName),
//    $("#address-input").append("<p> Address: " + vendorAddress),
//    $("#zip-input").text("<p> Zip: " + vendorZip),
//    $("#capacity-input").text("<p> Max Capacity: " + vendorCapacity),
//    $("#description-input").text("<p> Venue Details: " + vendorDetail),
//    $("#email-input").text("<p> Email: " + vendorEmail)
//    );

//    $("#mainbody").append(data);
// });





// ______code to try to get the image from the database onto the HTML. Still a WIP___________


// // Create a reference with an initial file path and name
// var storage = firebase.storage();
// // var pathReference = storage.ref('/venue_images');


// // Create a reference to the file we want to download
// var starsRef = storageRef.child('/venue_images');

// // Get the download URL
// starsRef.getDownloadURL().then(function(url) {

//     var img = document.getElementById('firebasePhoto');
//     img.src = url;
//   // Insert url into an <img> tag to "download"
// }).catch(function(error) {

//   // A full list of error codes is available at
//   // https://firebase.google.com/docs/storage/web/handle-errors
//   switch (error.code) {
//     case 'storage/object-not-found':
//       // File doesn't exist
//       break;

//     case 'storage/unauthorized':
//       // User doesn't have permission to access the object
//       break;

//     case 'storage/canceled':
//       // User canceled the upload
//       break;

//     case 'storage/unknown':
//       // Unknown error occurred, inspect the server response
//       break;
//   }
// });


















// storageRef.getDownloadURL().then(function(url) {
//     // `url` is the download URL for 'images/stars.jpg'


  function showimage() {

      var storageRef = firebase.storage().ref();
      var spaceRef = storageRef.child('/venue_images');
      console.log(spaceRef);
      storageRef.child('/venue_images').getDownloadURL().then(function(url) {
          var test = url;
          alert(url);
          document.getElementById('firebasePhoto').src = test;

      }).catch(function(error) {

      });
  };

  showimage();

 


