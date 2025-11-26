
// method 1


var n = 2131;
var temp = n;
var str = "";
if(n < 0){
    n = n*(-1);
}

var arr = [];
while(n >= 1){
    temp = n % 10;
    var str = str + temp;
    // console.log(n);
    // console.log(Math.floor(temp));
    str = Math.floor(temp);
    arr.push(str);
    
    
    // console.log(n, count);
    
    n = n / 10;
    
}

console.log(...arr);


//////////////////////////////////////////////////


// method 2

var num = 1234 ;
var temp = num ; 
var new1 = 0;
while(num >= 1){
    temp = num % 10;
    new1 = new1 * 10 + temp;
    console.log(new1);
    num = Math.floor(num / 10);
}


//////////////////////////////////////////////////


// method 3

var num = -12345;

let check = 1;

if(num < 0){
    check = -1;
    num = Math.abs(num);
    
}

var num1 = Number(String(num).split("").reverse().join("")) * check;

console.log(num1);






















