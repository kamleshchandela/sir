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



