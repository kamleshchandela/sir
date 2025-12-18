var arr = [1, 5, 3, 9] ;

// method 1
console.log("max is :" , Math.max(...arr))
console.log("min is :" , Math.min(...arr))


// method 2

var max = -Infinity ;
var min = Infinity ;

for(let i = 0 ; i < arr.length ; i ++){
    if(max < arr[i]){
        max = arr[i] ; 
    }
    if(min > arr[i]){
        min = arr[i] ; 
    }
}

console.log("max is :" , max) ;
console.log("min is :" , min) ;


