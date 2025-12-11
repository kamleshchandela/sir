var arr = [ 1 , "a" , 3 , 4 ]
var check = "7";
var value = 0;

for ( let i = 0 ; i < arr.length ; i++ ){
    if(arr[i] == check){
        console.log(check ,  "is :" , i);
        value = 1;
        break;
    }
    
}

if(value == 0){
        console.log(check ,  "is Not in arr :" , -1);
    }
    






