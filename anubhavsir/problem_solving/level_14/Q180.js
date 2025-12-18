var arr = [1, 2, 3, 4, 5] ;
var sum = 0 ; 

arr.forEach((e)=>{
    if(e % 2 == 0){
        sum = sum + e ;
    }
})


console.log(sum)

