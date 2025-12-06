var para = document.querySelector(".para");
var btn = document.querySelector(".btn");

var count = 1;

btn.addEventListener("click",()=>{


    if(count == 1){
        para.style.display = "none";
        btn.textContent = "show";

        count = 2;
    }
    else{
        para.style.display = "block";
        btn.textContent = "hide";

        count = 1;
    }


})