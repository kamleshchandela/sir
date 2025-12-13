
// method 1

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

if(max > 0){
    console.log("max is :" , max);

}
else{
    console.log("max is : null");
}
if(min < 0){
    console.log("min is :" , min);

}
else{
    console.log("min is : null");
}



// method 2

var max = Math.max(...arr)
var min = Math.min(...arr)

console.log( max > 0 ? "max is : " + max : "max is : null " )
console.log( min < 0 ? "min is : " + min : "min is : null " )









