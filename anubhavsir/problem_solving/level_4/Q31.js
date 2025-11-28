
// method 1

var str = "kamlesh";
var arr1 = str.split("");
// console.log(arr1.length);
let i = 0;
var count = 0;
while(i >= 0){
    
    if(arr1[i] == undefined){
        console.log(count);
        break;
    }
    count++;
    i++;
}

// method 2

var str = "kamlesh";

console.log(str.length);


// method 3

var str = "kamlesh";

var count = 0;
while(str[count]){
    
    count++;
   
}

console.log(count);






