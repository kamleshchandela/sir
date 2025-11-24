
var ul = document.querySelector("#ul");

var btn = document.querySelector(".btn");
var input = document.querySelector(".input");



btn.addEventListener("click",()=>{


    
    var inputValue = input.value;
    

    if(inputValue == ""){
        alert("enter your list data");
        return;
    }



    var li = document.createElement("li");
    li.textContent = inputValue;
    ul.appendChild(li);

    input.value = "";




})














