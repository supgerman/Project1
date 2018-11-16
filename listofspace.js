  var spaceRef;
  var venueName;
  var vendorAddress;
  var vendorZip;
  var vendorCapacity;
  var vendorDetail;
  var vendorEmail;
  
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


 
   $("#venue-name-input").text("Venue Name: " + venueName),
   $("#address-input").text("Address: " + vendorAddress),
   $("#zip-input").text("Zip: " + vendorZip),
   $("#capacity-input").text("Max Capacity: " + vendorCapacity),
   $("#description-input").text("Venue Details: " + vendorDetail),
   $("#email-input").text("Email: " + vendorEmail)
 

});


// ______code to try to get the image from the database onto the HTML. Still a WIP___________

    // function showimage() {

    //     var storageRef = firebase.storage().ref();
    //     var spaceRef = storageRef.child('venues.png');
    //     console.log(spaceRef);
    //     storageRef.child('venues.png').getDownloadURL().then(function(url) {
    //         var test = url;
    //         alert(url);
    //         document.querySelector('img').src = test;

    //     }).catch(function(error) {

    //     });
    // };


