var input = document.querySelector(".txt");
var btn = document.querySelector(".btn");
var p = document.querySelector("p");

var arr = [10,20,30,40,50];
// length -> 5 index [0,1,2,3,4|

function displayData(){
var index = parseInt(input.value);

try{
if(index > 4) {
    throw "user defined error which is out of bound array index";
}
console.log(arr[index]);
p.textContent = arr[index];
p.style.color = "green";
}

catch(error){
console.log(error);
p.textContent = error;
p.style.color = "red";
}

finally{
input.value = "";
}

}

btn.addEventListener("click", displayData);