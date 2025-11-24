var n = 0;
var sum = 0;
var temp = n;
if(n < 0){
    n = n*(-1);
}

while(n >= 1){
    temp = n % 10;
    sum = sum + Math.floor(temp);
    // console.log(n, count);
    
    n = n / 10;
}

console.log(sum);




