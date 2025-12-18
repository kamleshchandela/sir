var arr = [1, 2, 3, 4] ;
var target = 5 ;
var check = 1 ; 

for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[i] + arr[j] == target && check == 1 && i != j){
            console.log(true) ;
            check = 0 ;
            // console.log(arr[i])
            // console.log(arr[j])
            break ;
        }
    }
}

if(check == 1){
    console.log(false) ;
}




