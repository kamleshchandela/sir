var arr = [1, 2, 3, 5 , 4, 5 , 4 ];
var arr1 = [];
var num = 1;
for ( let i = 0 ; i < arr.length ; i++ ){
    for (let j = i+1 ; j < arr.length ; j++){
     if(arr[i] != arr[j]){
        num = 0;
        }   
    }
    if(num == 0){
        arr1.push(arr[i]);
        num = 1;
    }
    
}

console.log(arr1)


















