
var str = "I love coding" ;
var arr = str.split(" ") ;
var min = Infinity ;
var index = 0 ;
arr.forEach((e , i)=>{
    if(min > e.length){
        min = e.length ;
        index = i ;
    }
    
})


console.log(arr[index]) ;



