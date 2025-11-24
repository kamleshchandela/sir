
var ul = document.querySelector("#ul");

var btn = document.querySelector(".btn");
var btnde = document.querySelector(".btnde");
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


btnde.addEventListener("click",()=>{
    
    // ul.removeChild();
    ul.innerHTML = "";
})














