var arr1 = [11, 13, 15] ;
var arr2 = [3 , 5 ] ;
var ans = [] ;
var k = 0 ;
var i = 0 ; 
var j = 0 ; 

while(k < arr1.length + arr2.length){

    if(arr2.length > arr1.length){
        if(arr1[i] <= arr2[j]){
            ans.push(arr1[i]) ;
            i++ ;
        }
        else{
            ans.push(arr2[j]) ;
            j++ ;
        }
    }
    else{
        if(arr2[i] <= arr1[j]){
            ans.push(arr2[i]) ;
            i++ ;
        }
        else{
            ans.push(arr1[j]) ;
            j++ ;
        }
    }
    




    k++ ;
}



console.log(ans) ;




