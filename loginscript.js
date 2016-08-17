//Setting reference
var database = firebase.database().ref();
var messagebase = firebase.database().ref().child("Messages");
var userbase = firebase.database().ref().child("Users");
var tempuser = firebase.database().ref().child('Users').push().key;
var prevUsers;


$(document).ready(function () {
	$("#passError").attr("style", "display:none;");
	$("#userError").attr("style", "display:none;");
	$("#emailError").attr("style", "display:none;");
	$("#loginError").attr("style","display:none;");
});



userbase.on("value", function (snapshot){
    prevUsers = snapshot.val(); 
});


function checkUsed(prop,val){
	for (var row in prevUsers) {
    	// skip loop if the property is from prototype
    	if (!prevUsers.hasOwnProperty(row)) continue;
    	var obj = prevUsers[row];
    	for (var p in obj) {
       		// skip loop if the property is from prototype
        	if(!obj.hasOwnProperty(p)) continue;
        		if(p==prop && obj[p] == val){
        			return true;
       				}
		}
     } 
  return false;   
}

function infoMatch(prop1,val1,prop2,val2){
	match = false;
	for (var row in prevUsers) {
    	// skip loop if the property is from prototype
    	if (!prevUsers.hasOwnProperty(row)) continue;
    	var obj = prevUsers[row];
    	i = 0;
    	for (var p in obj) {
       		// skip loop if the property is from prototype
        	if(!obj.hasOwnProperty(p)) continue;
        		console.log(p,prop1,obj[p],val1);
        		console.log(p,prop2,obj[p],val2);
        		if(p==prop1 && obj[p] == val1){i+=1;}
        		if(p==prop2 && obj[p] == val2){i+=1;}
        		if(i>1){match = true;}
		}
     } 
     return match;
}


function login() {
	var user = $("#oldUser").val();
	var pass = $("#oldPass").val();
	if(infoMatch("username",user, "password",pass)) {
		window.location.href = "homepage.html?u=" + user;
		//window.load("homepage.html?u=" + user["username"]);
  	}
  	else{
  		$("#loginError").attr("style","display:block;");
  	}
  	return false;
}


function newUser(){
	var user = $("#newUser").val().trim();
	var pass = $("#newPass").val().trim();
	var email = $("#newMail").val().trim();
	var repass = $("#rePass").val().trim();

	$("#passError").attr("style","display:none;");
	$("#userError").attr("style", "display:none;");
	$("#emailError").attr("style", "display:none;");
	//firebase.auth().createUserWithEmailAndPassword(user, pass).catch(function(error) {});

	if(checkUsed("username",user) || pass !=repass || checkUsed("email",email) ){
		if(checkUsed("username",user)){$("#userError").attr("style","display:block;");}

		if(pass !=repass){$("#passError").attr("style","display:block;");}

		if(checkUsed("email",email)){$("#emailError").attr("style","display:block;");}

	}
	
	else{
		userbase.push({
		"username":user,
		"password": pass,
		"logintype":"email",
		"email":email,
	    });

		$("#newUser").val("");
		$("#newPass").val("");
		$("#newMail").val("");
		$("#rePass").val("");

		window.location.href = "homepage.html?u=" + user;
		//window.load("homepage.html?u=" + user["username"]);
	}
	
 }


function fbUser(){
}

function twUser(){
}

function ggUser(){
}