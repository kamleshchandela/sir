var arr = [10, 20, 30, 40, 50] ;
        //  0   1   2   3   4
        
var arr1 = arr.filter((e , i)=>{
    if(i % 2 == 0){
        return e ;
    }
})

console.log(arr1)

