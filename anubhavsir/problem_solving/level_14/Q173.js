var arr = [1, -2, 3, -4, 0] ; 
var arr1 = [] ;

arr.forEach((e)=>{
    if(e < 0){
        arr1.sort().push(e) ;
    }
})



arr.forEach((e)=>{
    if(e >= 0){
        arr1.push(e)
    }
    
})

console.log(arr1)
