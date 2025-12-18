var arr = [1, -2, 0, 5, -3] ;
var positives = 0 ;
var negatives = 0 ;
var zeros = 0 ;

arr.forEach((e)=>{
    if(e > 0){
        positives++ ;
    }
    else if (e < 0){
        negatives++ ;
    }
    else{
        zeros++ ;
    }
})

console.log("positives is :" , positives) ;
console.log("negatives is :" , negatives) ;
console.log("zeros is :" , zeros) ;






