
// method 1

var arr1 = [ 1 , 2 , 3 , 4 ];
var arr2 = [ 5 , 6 , 7 , 8 ];

for( let i = 0 ; i < arr2.length ; i++ ){
    arr1.push(arr2[i]);
}

console.log(arr1)


// method 2
// cincat method se bhi kar sakte he
var res = arr1.concat(arr2);
console.log(res);


// method 3
// spred method
var arr = [ ...arr1 , ...arr2 ]
console.log(arr)
