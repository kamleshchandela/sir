var n = -22;
var count = 0;

if(n < 0){
    n = n*(-1);
}
if(n == 0){
    count = 1;
}
while(n >= 1){

    count ++;
    // console.log(n, count);
    
    n = n / 10;
}

console.log(count);




