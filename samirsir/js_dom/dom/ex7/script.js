
var ul = document.querySelector("#ul");

var btn = document.querySelector(".btn");
var btnde = document.querySelector(".btnde");
var input = document.querySelector(".input");
var id = 1;

var delete1 = document.querySelector(".delete1");



btn.addEventListener("click",()=>{


    
    var inputValue = input.value;
    

    if(inputValue == ""){
        alert("enter your list data");
        return;
    }



    var li = document.createElement("li");
    li.textContent = `${id} . ${inputValue}`;
    ul.appendChild(li);
    li.setAttribute("id",id);

    id++;
    console.log(li);

    input.value = "";




})


btnde.addEventListener("click",()=>{
    
    // ul.removeChild();
    ul.innerHTML = "";
})




delete1.addEventListener("click",()=>{
    var num = prompt();
        console.log(num)
        document.getElementById(num).remove();
    
        // console.log(li.id = num);






})









