
var n = 5823 ;
var max = -Infinity;
var temp ;


function check(){
while(n >= 1){
    temp = parseInt(n % 10) ;
    if(max < temp){
        max = temp ;
    }
    n = n / 10 ;
}

console.log(max);


}


check();













