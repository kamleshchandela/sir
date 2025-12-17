

var n = 1234 ;
var count = 0 ;
var temp ;

function chesk(){
while(n >= 1){
    temp = parseInt(n % 10) ;
    if(temp % 2 == 1){
        count ++ ;
    }
    n = n / 10 ;
}

console.log(count);

}

check()


