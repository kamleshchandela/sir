var N = 16 ;
var num = 1;

for ( let i = 2 ; i < N ; i++ ){
    if( N % (i ** 2) == 0 ){
        console.log(true);
        num = 0;
        break;
    }
    
}

if( num == 1 ){
    if( N == 1 ){
        console.log(true);
    }
    else{
        console.log(false);
        
    }

}








