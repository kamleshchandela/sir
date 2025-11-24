var para = document.querySelector(".para");
var btn = document.querySelector(".btn");

var num = 1;

btn.addEventListener("click",()=>{


    para.textContent = num ;
    num++;


})