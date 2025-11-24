var para = document.querySelector(".para");
var btn = document.querySelector(".btn");
var num = 1;
btn.addEventListener("click",()=>{

    if(num === 1){
        para.textContent = "change";
        num = 2;
    }
    else{
        para.textContent = "kamlesh";
        num = 1;
    }




})