var arr = [ 2 , 4, 6, 7 , 23 , 5 , 1 , 2 , 6 ];
var min =  arr[0];

for ( let i = 0 ; i < arr.length ; i++ ){
    if( min > arr[i]){
        min = arr[i];
        

    }
    
}

// method 1
console.log( "min is :" , min);

// method 2
console.log("min is :" , Math.min(...arr));

// method 3 
arr = arr.sort((a,b) => a - b);
console.log("min is :" , arr[0]);





