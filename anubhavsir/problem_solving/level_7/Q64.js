
// method 1
var arr = ["x", "y"];
var arr1 = [ ];

for ( let i = 0 ; i < arr.length ; i++){
    arr1[i] = arr[i]; 
    
}

console.log(arr1);



// method 2
// console.log(arr1.concat(arr));


// method 3
var arr2 = arr.map((data)=>{
    return data;
})
console.log(arr2);


