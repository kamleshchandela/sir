
var all = document.querySelector(".all");
var btn = document.querySelector(".btn");
var nav = document.querySelector(".nav");
var pop = document.querySelector(".pop");
var count = 0;



function createCard(data) {
console.log(data);
var div = document.createElement('div');

var img = document.createElement('img');
img.classList.add("img");
img.setAttribute("src", data.strMealThumb);

var p1 = document.createElement('p');

p1.style.fontWeight = "800";
p1.style.color = "gray";
p1.classList.add("id");
p1.textContent = `id: ${data.idMeal}`

var p2 = document.createElement('p');

p2.style.fontWeight = "800";
p2.style.color = "black";
p2.classList.add("name");
p2.textContent = data.strMeal;

var p3 = document.createElement('p');

p3.style.fontWeight = "500";
p3.style.color = "black";
p3.classList.add("disc")

p3.textContent = data.strInstructions.split(" ").slice( 0 , 17).join(" ") + " ...";
p3.setAttribute("title" , data.strInstructions);

div.appendChild(img);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);

all.appendChild(div);
div.classList.add("class");


console.log(all);

}

function loadData() {

    btn.textContent = "See More";
    var al = alert("anter only one Char.");
    
    
    
    var char = prompt();
    if(char.length != 1){
        alert("anter only one Char.")
        
    }

    

    
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`)
.then((response) => response. json())
.then((data) => {
console.log(data);


// for (let i = 0; i <= 13; i++) {
// createCard(data.meals[i]);
// }

count ++;
if(count == 1){
    for (let i = 0; i <= 30; i++) {
    createCard(data.meals[i]);
    count = 0;
}
}
// else if(count == 2){
//     for (let i = 6; i <= 11; i++) {
//     createCard(data.meals[i]);
// }
// }
// else if(count == 3){
//     for (let i = 12; i <= 17; i++) {
//     createCard(data.meals[i]);
// }
// }
// else{
//     for (let i = 18; i <= 23; i++) {
//     createCard(data.meals[i]);
//     btn.style.display = "none";
// }
// }










})

.catch((error) => {
    // package.textContent = "You Got the error pls check the given link you provided"
})

}


btn.addEventListener("click",loadData);
document.addEventListener("keypress",(e)=>{
    if(e.key == "s" ){
        loadData();
    }
});



var click = 1;
document.addEventListener("click", (e)=> {
    console.log(e.target.parentElement);

    click++;
    // localStorage.setItem(click , e.target.parentElement.string());

})





var num = 1;
nav.addEventListener("click" , ()=>{
    if(num == 1){
        pop.style.margin = "0vw";
        num = 0;
    }
    else{
        pop.style.margin = "-100vw";
        num = 1;
    }
    
})

btn.addEventListener("click" , ()=>{
    pop.style.margin = "-100vw";
    num = 1;
})

all.addEventListener("click" , ()=>{
    pop.style.margin = "-100vw";
    num = 1;
})
















