var arr = [1, 2, 3, 4, 5] ;
var arr1 = arr ;
var k = 2 ;

for(let w = 0 ; w < k ; w ++){

    arr1 = arr1.map((e , i)=>{
    if(i == arr1.length - 1){
        return arr1[0] ;
    }
    else if(i == 0){
        return arr1[1] ;
    }
    else{
        return arr1[i + 1]
    }
    })


console.log(arr1) ;


}










