var arr = [ 1 , 1 , 1 , 0 , 0 , 0 , 1 ];
var zero = 0 ; 
var one = 0 ; 
for ( let i = 0 ; i < arr.length ; i++ ){
    if(arr[i] == 0 ){
        zero++;
    }
    else{
        one++;
    }
}

console.log("total zero is :" , zero );
console.log("total one is :" , one );






