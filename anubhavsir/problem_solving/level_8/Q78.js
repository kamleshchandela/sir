var arr = [ 1 , 3 , -4 , 5 , -6 ];
var min = Infinity;
var max = -Infinity;


for( let i = 0 ; i < arr.length ; i++ ){
    
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
    
}

console.log("max is :" , max);
console.log("min is :" , min);















