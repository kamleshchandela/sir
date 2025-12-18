
var str1 = "Dormitory" ;  // is ka ans true aaye ga 
var str2 = "Dirty room" ;

// var str1 = "hello" ;  // is ka ans false aaye ga
// var str2 = "world" ;

console.log(str1.split("").sort())
console.log(str2.split("").sort())

var arr1 = str1.split("").sort() ;
var arr2 = str2.split("").sort() ;

arr1.forEach((e)=>{
    if(e == " "){
        arr1.shift();
    }
})

arr2.forEach((e)=>{
    if(e == " "){
        arr2.shift() ;
    }
})

console.log(arr1)
console.log(arr2)

if( arr1.join("") == arr2.join("") ){
    console.log(true) ;
}
else{
    console.log(false) ;
}

