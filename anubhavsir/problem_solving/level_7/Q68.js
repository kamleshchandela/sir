var arr = [ 1 , 3 , 6 , 6 , 6]
var count = 1;


for ( let i = 0 ; i < arr.length ; i++){
    if(arr[i-1] > arr[i]){
        console.log(false);
        count = 0;
        break;
    }
}

if(count == 1){
    console.log(true);
}


