var input = document.querySelector(".txt");
var btn = document.querySelector(".btn");
var p = document.querySelector("p");

var arr = [10,20,30,40,50];
// length -> 5 index [0,1,2,3,4|

function displayData(){


try{
if(input.value.charCodeAt(0) >= 97 && input.value.charCodeAt(0) <= 122) {
    
    console.log(input.value);
    p.textContent = input.value;
    p.style.color = "green";
}
else if(input.value >= 0 && input.value <= 9){
    throw "only char";
}

else{
    throw "only small char input";
}

if  (input.value.length > 1){
    throw "only one char enter";
}

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