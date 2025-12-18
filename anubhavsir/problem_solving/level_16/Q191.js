var arr = [1, 3, 5, 7, 9] ;
var k = 5 ;
var count = 1;

for(let i in arr){
    if(arr[i] == k && count == 1){
        console.log(i) ;
        count = 0 ;
        break ;
    }
    
}

if(count == 1){
        console.log("-1")
    }


