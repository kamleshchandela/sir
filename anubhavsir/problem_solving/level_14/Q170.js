var arr = [1, 2, 3, 1] ;
var count = 0 ; 
var num = 0 ;
for(let i = 0 ; i < arr.length ; i++){
    count = 0 ; 
    for(let j = i ; j < arr.length ; j++){
        if(arr[i] == arr[j]){
            count++ ;
            if(count > 1){
                console.log(true) ; 
                num = 1 ;
                break ;
            }
        }
    }
    if(num == 1){
        break ; 
    }
}

if(num == 0){
    console.log(false)
}



