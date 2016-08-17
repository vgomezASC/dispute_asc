//Setting reference
var database = firebase.database().ref();
var messagebase = firebase.database().ref().child("Messages");
var userbase = firebase.database().ref().child("Users");
var tempuser = firebase.database().ref().child('Users').push().key;
var debates;
var everyone;

function getUrlVars(){
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
        });
    return vars;
 }


var u = getUrlVars()["u"];


$(document).ready(  function(){
 	$("#welc").append("<p>" + u + "</p>");
 });
 

$("#dm").click( function(){
    window.location.href = "index.html?u=" + u;
})

userbase.on("value", function (snapshot){
    everyone = snapshot.val();
    everyone = JSON.stringify(everyone);
 });


/*
userbase.on("value", function (snapshot){
    everyone = snapshot.val();
    console.log(everyone);
    for(var row in everyone){
        console.log(row.toString());
        for(var prop in row){
            //console.log(prop);
            for(var yak in prop){
                //console.log(yak);
            }
        }
    }

    
});


/*
 database.on("child_added", function(dataRow){
    var row = dataRow.val();
    console.log(row);
    $("#userlist").append("<p>" + row.user["username"] + ": "+ row.user["password"] + "/ " 
    	           + row.user["email"] + "</p>");

});
*/

/*
userbase.on("child_added", function(dataRow){
    var row = dataRow.val();
    $("#userlist").append("<p>" + row.username + ": "+ row.password + "/ " 
    	           + row.email + "</p>");
});


/*
var user = firebase.auth().currentUser;

if (user) {
  alert("loggedin");
} else {
  console.log("not");
}
*/