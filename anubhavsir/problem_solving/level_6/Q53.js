var arr = [ 2 , 4, 6, 7 , 23 , 5 , 1 , 2 , 6 ];
var max =  arr[0];

for ( let i = 0 ; i < arr.length ; i++ ){
    if( max < arr[i]){
        max = arr[i];
    }
    
}

// method 1
console.log( "max is :" , max);


// method 2
console.log("max is :" , Math.max(...arr));

// method 3 
arr = arr.sort((a,b) => b - a);
console.log("max is :" , arr[0]);







