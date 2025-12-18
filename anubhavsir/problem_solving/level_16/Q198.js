var str = "swiss" ;
var arr = str.split("") ;
var count = 1 ;


for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[i] == arr[j] && count == 1 ){
            console.log(arr[i]) ;
            count = 0 ;
            break ;
        }
    }
    if(count == 0){
        break ;
    }
}

    if(count == 1){
        console.log(null) ;
    }


