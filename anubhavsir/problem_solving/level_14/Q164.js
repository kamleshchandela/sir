var arr = [2, 4, 6 ] ;
var count = 1 ;
for(let i in arr){
    if(arr[i] % 2 != 0 && count == 1){
        console.log(false);
        count = 0 ; 
        break ;
    }
}

if(count == 1){
    console.log(true)
}



