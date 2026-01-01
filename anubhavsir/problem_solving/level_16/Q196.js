var arr = [1, 2, 3, 4, 5] ;
var sum = 0;
var k = 2 ;
for (let i = 0 ; i <= arr.length - k ; i++){
    var s = 0 ;
    for(let j = i ; j < i+k; j++){
        s = arr[j] + s ; 
        // console.log(s)
    }
    if(sum < s ){
            sum = s ;
        }
}
console.log(sum)