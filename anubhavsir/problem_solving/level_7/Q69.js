var arr = [10, 5, 8, 20, 18];
var arr1 = [];
var max1 = -Infinity;
var max2 = -Infinity;


for ( let i = 0 ; i < arr.length ; i++ ){
    for( let j = 0 ; j < arr.length ; j++ ){
        if(max1 < arr[i]){
            arr1.push(max1);
            console.log(arr1)
            max1 = arr[i];
            
        }
    }
}


for ( let i = 0 ; i < arr1.length ; i++ ){
    for( let j = 0 ; j < arr1.length ; j++ ){
        if(max2 < arr[i]){
            
            max2 = arr1[i];
            
        }
    }
}

console.log(max2);










