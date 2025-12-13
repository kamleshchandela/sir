var arr = [1, 2, 3, 4, 5];
var arr1 = [];
var arr2 = [];

for ( let i = 0 ; i < arr.length ; i++ ){
    if(arr[i] % 2 == 1){
        arr2.push(arr[i]);
    }
    else{
        arr1.push(arr[i]);

    }
}

console.log("only even :" , arr1)
console.log("only odd :" , arr2)






















