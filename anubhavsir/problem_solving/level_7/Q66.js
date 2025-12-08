var arr = [ 1 , "a" , 3 , 4 ]
var check = "3";


for ( let i = 0 ; i < arr.length ; i++ ){
    if(arr[i] == check){
        console.log(check ,  "is :" , i);
        break;
    }
    
}
