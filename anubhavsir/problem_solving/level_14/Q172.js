var arr = [1, 2, 3 , 4] ; 
var count = 1 ;

for (let i = 1 ; i < arr.length ; i++){
    if(arr[i] <= arr[i - 1]){
        console.log(false) ;
        count = 0 ; 
        break ;
    }
}

if(count == 1){
        console.log(true)

}

