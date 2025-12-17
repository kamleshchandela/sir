
var str = "hello" ;
var arr = str.split("");
count = 1 ;

for(let e in arr){
    if((arr[e] == "a" || arr[e] == "e" || arr[e] == "i" || arr[e] == "o" || arr[e] == "u" || arr[e] == "A" || arr[e] == "E" || arr[e] == "I" || arr[e] == "O" || arr[e] == "U") && count == 1 ){
        console.log(true);
        count = 0 ;
    }
}

if(count == 1){
    console.log(false)
}

