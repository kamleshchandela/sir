
var arr = [4, 4, 1, 1, 4] ;
var obj = {};

for (let i = 0 ; i < arr.length ; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    }
    else{
        obj[arr[i]]++ ;
    }
}

var max = -Infinity;

for (let i in obj){
    if (i > max){
        max = i ;
    }
    
}

// console.log()

console.log(max , "is" , obj[max] , "times")






