
var str = "I love coding" ;
var arr = str.split(" ") ;
var max = -Infinity ;

arr.forEach((e)=>{
    if(max < e.length){
        max = e.length ;

    }
})

console.log(max)




