
var str = "I love JavaScript coding" ;
var arr = str.split(" ") ;

var arr1 = arr.filter((e)=>{
    return e.length >= 5 ;
})

console.log(arr1)

console.log("Words with Length ≥ 5 is :" , arr1.length)











