
var arr1 = [3, 1, 4, 2] ;
var k = 3 ;

for(let i = 0 ; i < arr1.length ; i++){
    for(let j = 0 ; j < arr1.length ; j++){
        if(arr1[j] > arr1[j+1]){
            var temp = arr1[j] ;
            arr1[j] = arr1[j+1];
            arr1[j+1] = temp ;
            // console.log(arr1);
        }
    }
}


console.log(arr1);
console.log(arr1[k-1]) ;



// 


var arr1 = [3, 1, 4, 2] ;
var k = 3 ;

for(let i = 0 ; i < arr1.length ; i++){
    if(arr1[i] < arr1[i-1]){
        for(let j = i ; j >= 0 ; j--){
                if(arr1[j] < arr1[j-1]){
                    var temp = arr1[j] ;
                    arr1[j] = arr1[j-1];
                    arr1[j-1] = temp ;
                    // console.log(arr1);
                }
            }
    }
    
}


console.log(arr1);
console.log(arr1[k-1]) ;



