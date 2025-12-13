
// method 1

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



// method2 samjna thodese name and method ko
// iske upar vale code me shift method and push ka use karke 
var arr2 = arr.splice(0 , 1);
console.log(arr) 
arr.push(...arr2)
console.log(arr) 






