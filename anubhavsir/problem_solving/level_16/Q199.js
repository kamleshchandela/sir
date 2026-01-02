var str = "aaabbcddd" ;
var arr = str.split("") ;


var arr1 = arr.filter((e , i)=>{
    return e != arr[i + 1] ;
})

console.log(arr1.join("")) ;



