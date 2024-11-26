// var item = document.getElementById("demo");
// function display() {
//     item.innerHTML = "Butten was clicked"
//     alert("Button was clicked");
// }

// var item1 = document.getElementById("demo");
// function display1() {
//   item1.addEventListener("mouseover", display)= "button was clicked";
//}

function validate() {
  let myname = document.getElementById("name").value;
  let myemail = document.getElementById("email").value;
  let password = document.getElementById("psw").value;
  let confirmPassword = document.getElementById("cnfpsw").value;

  console.log(myname, myemail, password, confirmPassword);
  //validating the form

  if (
    myname == "" ||
    myemail == "" ||
    password == "" ||
    confirmPassword == ""
  ) {
    alert("All fields are required");
  }
}
