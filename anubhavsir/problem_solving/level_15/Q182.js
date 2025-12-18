
var arr = [1, 2, 3, 4] ;
var i = 1 ;
var j = 3 ;
var arr1 = [] ;

arr.forEach((e , k)=>{
    if(k == i){
        arr1.push(arr[j]);
    }
    else if(k == j){
        arr1.push(arr[i]);
    }
    else{
        arr1.push(e)
    }
})

console.log(arr1)







