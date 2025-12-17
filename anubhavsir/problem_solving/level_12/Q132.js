
var n = 5823 ;
var min = Infinity;
var temp ;

function check (){
while(n >= 1){
    temp = parseInt(n % 10) ;
    if(min > temp){
        min = temp ;
    }
    n = n / 10 ;
}

console.log(min);



}


check();












