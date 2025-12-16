
var all = document.querySelector(".all");
var input = document.querySelector("#input");
var D;


document.addEventListener("keypress" , (e)=>{
    if( e.key == "Enter" && input.value != "" ){


        var box = document.createElement("div");
        box.classList.add("box")
        all.appendChild(box)

        var P = document.createElement("p") ;
        P.classList.add("para") ;
        P.textContent = "👉  " + input.value ;
        box.appendChild(P) ;

        D = document.createElement("span") ;
        D.textContent = "D" ;
        D.classList.add("delete") ;
        box.appendChild(D) ;


        input.value = "";
        












    }
})


document.addEventListener("click" , (e)=>{
    if(e.target.className == "delete"){
        e.target.parentElement.innerHTML = "";
    }
     
    
})





