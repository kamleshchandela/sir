
// method 1
var arr = [ 1 , 2 , 3 , 4 ];
var arr1 = [ ];

for ( let i = 0 ; i < arr.length ; i++){
    arr1[i] = arr[arr.length - i - 1]; 
    
}


console.log(arr1);


// method 2
var arr2 = arr.reverse();
console.log(arr2);



// method 3
var arr1 = arr.map((data)=>{
    return data;
})

console.log(arr1.reverse());









