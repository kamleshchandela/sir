
var num = 125 ;
var count = 1;

for(var j = 2; j< num; j++){
    count = 1;

for (var i = 2 ; i< j ; i++){
    if(j % i ==0){
        
        count = 2;
        // break hoga yha tobhi chalega or nahi hoga tobhi chalega
        // break;
    }
    
}

if(count == 1){
        console.log(j);
       
    }


}








