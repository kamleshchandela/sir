
var num = 91 ;
var count = 1;
for (var i = 2 ; i< num ; i++){
    if(num % i ==0){
        console.log(i);
        console.log("no prime");
        count = 2;
        break;
    }
    
}

if(count == 1){
        console.log("Yes prime");
       
    }











