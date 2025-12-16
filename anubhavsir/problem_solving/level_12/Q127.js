var count = 0;
function print (e) {
    for (let i = e ; i >=1 ; i-- ){
        if(i % 2 == 0 || i % 3 == 0){
            count ++ ;
        }
        
    }
}
 
print(6);

console.log(count);

