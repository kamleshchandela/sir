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
while (j > i) {
    if (arr[j] < l) {
        i = j;
        k = arr.length - 1;
        j = Math.floor((i + k) / 2);

    }
    else {
        i = 0;
        k = j;
        j = Math.floor((i + k) / 2)
    }       
    if (arr[j] == l) {
        console.log("l" , l);
        console.log("j",j);
        x = j ;
        y = j ;
        while(arr[x] == arr[x-1]){
            
            x = x - 1 ;
        }
        while(arr[y] == arr[y+1]){
            
            y = y + 1 ;
        }
        console.log("x" , x);
        console.log("y" , y);


        console.log("ans :" , y-x+1);
        break;
    }
}





