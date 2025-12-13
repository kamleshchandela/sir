
var arr1 = [ 1 , 2 , 3 , 4 , 5 , 4 , 6 ];
var arr2 = [ 6 , 7 , 7 , 8 , 4 , 2 ];
var res = [] ; 

for( let i = 0 ; i < arr1.length ; i++ ){
    for ( let j = 0 ; j < arr2.length ; j++ ){
        if (arr1[i] == arr2[j] ){
            res.push(arr1[i]);
                

        }
    }
}


console.log(res);

