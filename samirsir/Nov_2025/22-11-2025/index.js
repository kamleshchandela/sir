const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");
const addInput = document.getElementById("addInput");
const submitBtn = document.getElementById("submitBtn");
var submit = true;

var namelocal = localStorage.getItem("Name");
var email = localStorage.getItem("Email");
var age = localStorage.getItem("Age");
var add = localStorage.getItem("add");

nameInput.value = namelocal;
emailInput.value = email;
ageInput.value = age;
addInput.value = add;


submitBtn.addEventListener("click", () => {
  
let nameValue = nameInput.value;
let emailValue = emailInput.value;
let ageValue = ageInput.value;
let addValue = addInput.value;

if(nameValue == ""){
    nameInput.style.border = "3px solid red";
    submit = false;
    alert("name is uncomplete");

}
else{
    nameInput.style.border = "3px solid blue";
}
if(emailValue == ""){
    emailInput.style.border = "3px solid red";
    alert("emai is uncomplete");

    submit = false;
}
else{
    emailInput.style.border = "3px solid blue";
}
if(ageValue == ""){
    ageInput.style.border = "3px solid red";
    alert("age is uncomplete");

    submit = false;

}
else{
    ageInput.style.border = "3px solid blue";
}
if(addValue == ""){
    addInput.style.border = "3px solid red";
    alert("address is uncomplete");

    submit = false;

}
else{
    addInput.style.border = "3px solid blue";
}
if(nameValue != "" && emailValue != "" && ageValue != "" && addValue != ""){
    nameInput.style.border = "";
    emailInput.style.border = "";
    ageInput.style.border = "";
    addInput.style.border = "";
    submit = true;
}


if(submit){

  localStorage.setItem("Name",nameValue);
  localStorage.setItem("Email",emailValue);
  localStorage.setItem("Age",ageValue);
  localStorage.setItem("add",addValue);


  document.querySelector(".output").style.display = "block";

  document.querySelector("#name").textContent = nameValue;
  document.querySelector("#email").textContent = emailValue;
  document.querySelector("#address").textContent = addValue;
  document.querySelector("#age").textContent = ageValue;

  console.log("Name:", nameValue);
  console.log("Email:", emailValue);
  console.log("Age:", ageValue);

  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
  addInput.value = "";


}


  

});





// localStorage.clear();


