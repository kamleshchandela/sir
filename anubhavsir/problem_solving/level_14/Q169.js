var arr = [3, 7, 2, 2] ;
var min = Infinity ;

for(let i = 0 ; i < arr.length ; i++ ){
    if(min > arr[i]){
        
        min = arr[i] ; 
    }
    
}



for(let i in arr){
    if(arr[i] == min){
        console.log("value of min is :" , min) ;
        console.log("index of min is :" , i) ;
        break ;
    }
}



