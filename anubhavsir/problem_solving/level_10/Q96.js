
var obj = {math: 80, science: 90, english: 70} ;
var sum = 0 ;
var count = 0;
for (let i in obj){
    sum = sum + obj[i] ;
    count ++ ;
}

console.log(sum)

console.log("average is" , sum / count );



if( (sum / count) == undefined ){
    console.log("students marks are not added")
}


// jab obj = {} hoga tan (sum / count) ka ans NaN aaye ga par hame if consdition me to (sum / count)==undefined karke check karva na pade ga





