var n = 1234;
var pro = 1;
var temp = n;
if(n < 0){
    n = n*(-1);
}
if(n == 0){
    pro = 0;
}

while(n >= 1){
    temp = n % 10;
    pro = pro * Math.floor(temp);
    // console.log(n, count);
    
    n = n / 10;
}

console.log(pro);




