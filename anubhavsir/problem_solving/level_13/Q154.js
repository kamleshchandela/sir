
var str = "12345" ;
var arr = str.split("");
var count = 1 ;

for(let e in arr){
    if((arr[e] != "1" || arr[e] != "2" || arr[e] != "3" || arr[e] != "4" || arr[e] != "5" || arr[e] != "6" || arr[e] != "7" || arr[e] != "8" || arr[e] != "9" || arr[e] != "0" ) && count == 1 ){
        console.log(false);
        count = 0 ;
    }
    
}

if(count == 1){
        console.log(true)
        
    }


