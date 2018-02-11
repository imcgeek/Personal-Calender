// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
document.getElementById('calendar').style.visibility = "hidden";
}
//Function to Hide Popup
function div_hide(){
  document.getElementById('calendar').style.visibility = "visible";
document.getElementById('abc').style.display = "none";
}

function div_show_reminder() {
document.getElementById('reminder').style.display = "block";
document.getElementById('calendar').style.visibility = "hidden";
}
//Function to Hide Popup
function div_hide_reminder(){
  document.getElementById('calendar').style.visibility = "visible";
document.getElementById('reminder').style.display = "none";
}
