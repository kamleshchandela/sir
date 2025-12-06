var nameInput = document.querySelector("#nameInput");
var emailInput = document.querySelector("#emailInput");
var ageInput = document.querySelector("#ageInput");
var submitBtn = document.querySelector("#submitBtn");

  

  var namefirst = localStorage.getItem("name1");
  var emailfirst = localStorage.getItem("email1");
  var agefirst = localStorage.getItem("age1");

  nameInput.value = namefirst;
  emailInput.value = emailfirst;
  ageInput.value = agefirst;





submitBtn.addEventListener("click",()=>{
    


    var nameValue;
    var emailValue;
    var ageValue;


     nameValue = nameInput.value; 
     emailValue = emailInput.value; 
     ageValue = ageInput.value; 
    

    localStorage.setItem("name1",nameValue);
    localStorage.setItem("email1",emailValue);
    localStorage.setItem("age1",ageValue);
    
    
     nameInput.value = ""; 
     emailInput.value = ""; 
     ageInput.value = ""; 





})


