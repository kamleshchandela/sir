
var n = 21 ;
var temp ;
var sum = 0 ;

function check(k){
while(n >= 1){
    temp = parseInt(n % 10) ;
    sum = sum + temp;
    // console.log(sum)
        
    
    n = n / 10 ;
}

if(k % sum == 0){
    console.log(true)
}
else{
    console.log(false)
}


}

check(n)
