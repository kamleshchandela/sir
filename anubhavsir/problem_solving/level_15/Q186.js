
var arr1 = [12 , 15 ,13 , 18 , 21 , 22 , 25 , 11 , 9 , 8] ;

for(let i = 0 ; i < arr1.length ; i++){
    for(let j = 0 ; j < arr1.length - i ; j++){
        if(arr1[j] > arr1[j+1]){
            var temp = arr1[j] ;
            arr1[j] = arr1[j+1];
            arr1[j+1] = temp ;
            console.log(arr1);
        }
    }
}


console.log(arr1);


