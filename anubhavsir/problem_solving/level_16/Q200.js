
var arr = [1, 2, 2, 3, 3, 3] ;


var arr1 = arr.sort().filter((e , i)=>{
    return e != arr[i - 1] ;
})

console.log(arr1) ;



