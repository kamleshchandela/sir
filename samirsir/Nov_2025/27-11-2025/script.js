var card = document.querySelector(".card");
var focus = document.querySelector("#focus");

card.addEventListener("mouseenter",()=>{
    card.style.backgroundColor = "red";
})
card.addEventListener("mouseleave",function(){
    card.style.backgroundColor = "white";
})




//   IMP 

document.addEventListener("click",(kamlesh)=>{
    console.log(kamlesh.target);
    console.log(kamlesh.target.getAttribute("class"));

    if(kamlesh.target.getAttribute("class") == "card"){
    console.log(kamlesh.target.setAttribute("class" , "card11"));

    }
})






// kya kya mouse gyu te graph throu jani sakai

card.addEventListener("mousemove",(kamlesh)=>{
    console.log("curser location X Y", kamlesh.clientX , kamlesh.clientY);
})


// focus only for input notes

focus.addEventListener("focus",()=>{
    focus.style.border = "0.5vw solid red";
})






// scroll ke liye sari theory


document.addEventListener("wheel",(kamlesh)=>{
    if(kamlesh.deltaY  > 0){
        console.log("down")
        card.style.backgroundColor = "green";
    }
    else if(kamlesh.deltaY  < 0){
        console.log("up")
        card.style.backgroundColor = "aqua";
    }
    else{
        console.log("stop")
        card.style.backgroundColor = "red";
    }
})

document.addEventListener("wheel",(kamlesh)=>{
    if (kamlesh.deltaX > 0){
        console.log("righe")

        card.style.backgroundColor = "yellow";
    }
    else if (kamlesh.deltaX < 0){
        console.log("left")

        card.style.backgroundColor = "black";
    }
    else{
        console.log("oll stop")

        // card.style.backgroundColor = "yellow";
    }
})


// user copy and paste kare tab targt rakhne ke liye

document.addEventListener("copy",(kamlesh)=>{
    console.log("copy");
    console.log(kamlesh.target)
})
document.addEventListener("paste",(kamlesh)=>{
    console.log("paste");
    console.log(kamlesh.target)
})
