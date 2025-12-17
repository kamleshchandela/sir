
var str = "Hello" ;
var arr = str.split("");
var count = 1 ;

for(let e in arr){
    if( !(arr[e] >= "a" && arr[e] <= "z" ) && !(arr[e] >= "A" && arr[e] <= "Z" ) && count == 1 ){
        console.log(false);
        count = 0 ;
    }
    
}

if(count == 1){
        console.log(true) ;
        
    }


