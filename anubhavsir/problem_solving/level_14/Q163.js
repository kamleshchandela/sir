var arr1 = [-1, 2, -3] ; 
var arr2 = [];

arr1.forEach((e)=>{
    if(e < 0){
        arr2.push(e * (-1)) ;
    }
    else{
        arr2.push(e);
    }


})

console.log(arr2)
