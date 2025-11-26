var btn = document.querySelector(".btn");
var input = document.querySelector(".input");

// best method last ma chhe

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











// best method

// var str = "kamlesh@gmail.com";

// var num =  str.split("@");

// console.log(num);


// if(num[1]=="gmail.com"  && num[2] == undefined){
//     console.log("true"
//         )
        
    
// }
// else{
//     console.log("false"
//         )
        
    
// }
















