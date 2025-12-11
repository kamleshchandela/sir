// method 1
var arr = [ 1 , 2 , 3 , 4 ];

for ( let i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i] * 2 ; 
    
}
console.log(arr);


// method 2
var arr1 = arr.map((data)=>{
    return data*2;
})

console.log(arr1)












