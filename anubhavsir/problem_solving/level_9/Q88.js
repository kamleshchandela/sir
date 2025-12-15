
var N = 370 ;
var arr = [];
var sum = 0;
var num = N ;

while( N >= 1 ){
    
    let temp = parseInt( N % 10) ;
    
    arr.push(temp);
    
    N = N / 10 ;
}

console.log(arr);

var arr1 = arr.map((e)=>{
    return e**arr.length;
})


console.log(arr1);

arr1.forEach((e)=>{
    sum = sum + e;
})

console.log(sum)


if( sum == num ){
    console.log(true)
}
else{
    console.log(false)
}




