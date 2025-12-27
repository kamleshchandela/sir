
var arr1 = [12 , 15 ,13 , 18 , 21 , 22 , 25 , 11 , 9 , 8] ;
var max = -Infinity ;
var num = 0;

for(let i = 0 ; i < arr1.length ; i++){
    num = 0 ; 
    max = -Infinity ;
    for(let j = 0 ; j < arr1.length - i ; j++){
        if(max < arr1[j]){
            max = arr1[j] ;
            num = j ;
        }
        if(j == arr1.length - i - 1){
            var temp = arr1[num] ;
            arr1[num] = arr1[arr1.length - i - 1];
            arr1[arr1.length - i - 1] = temp ;




        // agar bichake stape dekhane he to yahase de kho     
            // console.log(arr1);
        
        
        
        
        
        }
    }
}


console.log( "ans :" , arr1);




// Ex : for dessending



var arr1 = [12 , 15 ,13 , 18 , 21 , 22 , 25 , 11 , 9 , 8] ;
var min = -Infinity ;
var num = 0;

for(let i = 0 ; i < arr1.length ; i++){
    num = 0 ; 
    min = Infinity ;
    for(let j = 0 ; j < arr1.length - i ; j++){
        if(min > arr1[j]){
            min = arr1[j] ;
            num = j ;
        }
        if(j == arr1.length - i - 1){
            var temp = arr1[num] ;
            arr1[num] = arr1[arr1.length - i - 1];
            arr1[arr1.length - i - 1] = temp ;





        // agar bichake stape dekhane he to yahase de kho     
            // console.log(arr1);




        }
    }
}


console.log( "ans :" , arr1);












