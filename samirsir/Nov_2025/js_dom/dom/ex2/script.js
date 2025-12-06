var para = document.querySelector(".para");
var btn = document.querySelector(".btn");
var num = 1;
btn.addEventListener("click",()=>{


    if(num == 1){
        para.style.color = "red";
        para.style.backgroundColor = "blue";
        para.style.fontSize = "3vw";

        num = 2;

    }
    else{
        para.style.color = "";
        para.style.backgroundColor = "";
        para.style.fontSize = "";

        num = 1;
    }
    

})