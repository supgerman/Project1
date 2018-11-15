$("#Addspace").on("submit" , function(event){
    event.preventDefault()
    var zipcode = $("#Zipcode").val()
 var nofc = $("#NofC").val()
 var address = $("#address").val()
 var emailaddress = $("#emailAddress").val()
 var maxpeople = $("#maxpeople").val()
 var DescriptionofSpace = $("#DescriptionofSpace").val()
 console.log(DescriptionofSpace);
    console.log(maxpeople);
    console.log(emailaddress);
    console.log(address);
    console.log(zipcode);
    console.log(nofc);
})



function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}