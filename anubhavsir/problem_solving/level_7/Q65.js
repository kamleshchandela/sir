
// method 1

var arr = [ 1 , "a" , 3 , 4 ]
var check = "3";
var num = 1;

for ( let i = 0 ; i < arr.length ; i++ ){
    if(arr[i] == check){
        console.log(true);
        num = 0;
        break;
    }
    
}

if(num == 1){
        console.log(false);

    }





// method 2

if(arr.includes(3)){
    console.log("okok")
}
if(arr.includes("a")){
    console.log("okok")
}












