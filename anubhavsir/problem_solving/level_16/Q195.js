var arr = [1, -2, 3, 4, -1] ;
var sum = 0;
for (let i = 0 ; i < arr.length ; i++){
    var s = 0 ;
    for(let j = i + 1 ; j < arr.length ; j++){
        var s = arr[j] + s ; 
        if(sum < s ){
            sum = s ;
        }
        
    }
}
console.log(sum)