


var arr1 = [1, 2, 3, 4, 5] ;
var k = 8 ;

if(k>arr1.length){
    k = k % arr1.length ;
    console.log(k)
}
 
for(let w = 0 ; w < k ; w ++){

    arr1 = arr1.map((e , i)=>{
    if(i == arr1.length - 1){
        return arr1[arr1.length - 2] ;
    }
    else if(i == 0){
        return arr1[arr1.length - 1] ;
    }
    else{
        return arr1[i - 1] ;
    }
    })


console.log(arr1) ;


}









