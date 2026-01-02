
var arr = [1, 1, 2, 2, 2, 3, 1, 1] ;


var arr1 = arr.filter((e , i)=>{
    return e != arr[i - 1] ;
})

console.log(arr1) ;



