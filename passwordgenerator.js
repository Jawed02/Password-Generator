function getPassword(){

var name = document.getElementById("name").value;
var mail = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var lengthOfPassword = document.getElementById("length").value;

var password = "";
var characters = name+mail+phone;
var character_length = characters.length;

for(var i=0;i<lengthOfPassword;i++){
    password += characters.charAt(Math.floor(Math.random() * character_length))
}


document.getElementById("password").innerHTML = password;


}
