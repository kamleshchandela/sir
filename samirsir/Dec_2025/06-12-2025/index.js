
var all = document.querySelector(".all");
var btn = document.querySelector(".btn");
var count = 0;


function createCard(data) {
console.log(data);
var div = document.createElement('div');

var img = document.createElement('img');
img.setAttribute("src", data.strCategoryThumb);

var p1 = document.createElement('p');
p1.style.fontSize = "1.5vw";
p1.style.fontWeight = "800";
p1.style.color = "gray";
p1.textContent = `id: ${data.idCategory}`

var p2 = document.createElement('p');
p2.style.fontSize = "1.5vw";
p2.style.fontWeight = "800";
p2.style.color = "black";
p2.textContent = data.strCategory;

var p3 = document.createElement('p');
p3.style.fontSize = "1.2vw";
p3.style.fontWeight = "500";
p3.style.color = "black";

p3.textContent = data.strCategoryDescription.split(" ").slice( 0 , 25).join(" ") + " ...";
p3.setAttribute("title" , data.strCategoryDescription);

div.appendChild(img);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);

all.appendChild(div);
div.classList.add("class");


console.log(all);

}

function loadData() {
fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then((response) => response. json())
.then((data) => {
console.log(data);


// for (let i = 0; i <= 13; i++) {
// createCard(data.categories[i]);
// }

count ++;


if(count == 1){
    data.categories.slice(0, 5).forEach((element, index) => {
    createCard(data.categories[index]);
    });
}
else if(count == 2){
    data.categories.slice(5, 10).forEach((element, index) => {
    createCard(data.categories[index]);
    });
}
else{
    data.categories.slice(10, 15).forEach((element, index) => {
    createCard(data.categories[index]);
    });
}


})

.catch((error) => {
    // package.textContent = "You Got the error pls check the given link you provided"
})

}


btn.addEventListener("click",loadData);














