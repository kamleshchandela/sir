var arr = [1, 2, 2, 2, 3] ;
var count = 0 ;
var target = 2 ;

arr.forEach((e)=>{
    if(e == target){
        count ++ ;
    }
})

console.log(count) ;














// 


var arr = [1, 2, 2, 2, 3];
var l = 2;
var i = 0;
var k = arr.length - 1;
var x = 0;
var y = 0;
var j = Math.floor((i + k ) / 2)
while (k >= i) {
    if (arr[j] < l) {
        i = j + 1;
        j = Math.floor((i + k) / 2);

    }
    else if (arr[j] > l) {
        k = j - 1;
        j = Math.floor((i + k) / 2)
    }       
    else{
        
        x = j ;
        k = j - 1 ;
        j = Math.floor((i + k) / 2)
        console.log(x)
        
        break;
    }
}





