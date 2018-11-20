var storageRef;
var venueName;
var vendorAddress;
var vendorZip;
var vendorCapacity;
var vendorDetail;
var vendorEmail;
var imageUrl;
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

const newVendor = {}

$("#click-button").on("click", function(event) {
event.preventDefault(event);
  
// Grabs user input
  newVendor.name = $("#venue-name-input").val();
  newVendor.location = $("#address-input").val();
  newVendor.details = $("#zip-input").val(); 
  newVendor.number = $("#capacity-input").val();
  newVendor.description = $("#description-input").val();
  newVendor.email = $("#vendor-email-input").val();
  // newVendor.image =$("#image-input").val();

database.ref().push(newVendor);

  //  Logs everything to console
  //  console.log(newVendor.venueName);
  //  console.log(newVendor.vendorAddress);
  //  console.log(newVendor.vendorZip);
  //  console.log(newVendor.vendorCapacity);
  //  console.log(newVendor.vendorDetail);
  //  console.log(newVendor.vendorEmail);
    
   // Clears all of the text-boxes
  $("#venue-name-input").val("");
  $("#address-input").val("");
  $("#zip-input").val("");
  $("#capacity-input").val("");
  $("#description-input").val("");
  $("#vendor-email-input").val("");
  });

// // 3. Create Firebase event for adding vendor to the database and a row in the text when a user adds an entry
database.ref().on("child_added", function(snapshot) {
// firebaseSnapshot = snapshot;
//  console.log("firebase data: ", firebaseSnapshot);
//  console.log(snapshot.val());
 
  var venueName = snapshot.val().name;
  var vendorAddress = snapshot.val().location;
  var vendorZip = snapshot.val().details;
  var vendorCapacity = snapshot.val().number;
  var vendorDetail = snapshot.val().description;
  var vendorEmail = snapshot.val().email;
  var imageUrl = snapshot.val().imageUrl;
  // console.log(imageUrl);


  // **Rick helped me crack adding the image code
   //   // Create the new list
var data = $("<ul>").html(
   `
    <img src="${imageUrl}" />
    <li>Venue Name:  ${venueName}</li>
    <li>Address: ${vendorAddress}</li>
    <li>Zip:  ${vendorZip}</li>
    <li>Max Capacity:  ${vendorCapacity}</li>
    <li>Venue Description:  ${vendorDetail}</li>
    <li>Email:  ${vendorEmail}</li>`
  );
$("#container").append(data);

  });










   
