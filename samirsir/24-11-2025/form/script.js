var btn = document.querySelector(".btn");
var input = document.querySelector(".input");





// console.log(arr[0]);


btn.addEventListener("click",()=>{
    var inputValue = input.value;
    var arr = inputValue;
    var string = "";

    console.log(inputValue);


    
for(let i = 0;i<arr.length ; i++){
    for(let j = i;j<i + 10 ; j++){

        string = string + arr[j];

        if(string == "@gmail.com"){
            // alert("yes");
            console.log("ok");
            input.style.border = "0.4vw solid blue";
            return;
        }
        else{
            // alert("yes");
            console.log(string);
            input.style.border = "0.4vw solid red";

            
        }
        console.log(string);
        
    }
    string = "";
}


})


















