var card = document.querySelector(".card");
var count1 = document.querySelector(".count1");
var count2 = document.querySelector(".count2");
var btn = document.querySelector(".btn");
var num1 = 0;
var num2 = 0;
var backco ;
function color (){
    var a = `${255 * Math.random()}`;
    var b = `${255 * Math.random()}`;
    var c = `${255 * Math.random()}`;

    backco = `rgb(${a},${b},${c})`
}

card.addEventListener("mouseenter",()=>{
    console.log(backco)
    color();
    card.style.backgroundColor = backco;
    num1 ++;
    count1.textContent = num1;
})
card.addEventListener("mouseleave",()=>{
    color();
    card.style.backgroundColor = backco;
    num2 ++;
    count2.textContent = num2;
})



btn.addEventListener("dblclick",()=>{
    localStorage.setItem("mouseenter",count1.textContent);
    localStorage.setItem("mouseleave",count2.textContent);

})


document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("p").textContent = "kamlesh";
})

window.addEventListener("load",()=>{
    document.querySelector("p").textContent = "kamlesh";
    document.querySelector("p").style.color = "red";
})





