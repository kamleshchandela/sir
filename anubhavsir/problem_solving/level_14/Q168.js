var arr = [3, 7, 2, 7] ;
var max = -Infinity ;

for(let i = 0 ; i < arr.length ; i++ ){
    if(max < arr[i]){
        
        max = arr[i] ; 
    }
    
}



for(let i in arr){
    if(arr[i] == max){
        console.log("value of max is :" , max) ;
        console.log("index of max is :" , i) ;
        break ;
    }
}








