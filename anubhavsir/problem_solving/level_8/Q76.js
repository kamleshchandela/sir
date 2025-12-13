
var arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 ];
var arr1 = [];

for ( let i = 0 ; i< arr.length ; i++ ){
    if( i == arr.length - 1 ){
        arr1[i] = arr[0] ;
    }
    else{
    arr1[i] = arr[i+1];

    }
}

console.log(arr1)






