var arr = [ 2 , 3 , 5 , 7 , 9 ] ;
var count = 1 ;
for(let i in arr){
    if(arr[i] % 2 == 0 && count == 1){
        console.log(true);
        count = 0 ; 
        break ;
    }
}

if(count == 1){
    console.log(false) ;
}



