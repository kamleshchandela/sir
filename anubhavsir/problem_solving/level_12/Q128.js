var count = 0;
function print (e) {
    for (let i = e ; i >=1 ; i-- ){
        if(i % 2 == 0 && i % 5 == 0){
            count ++ ;
        }
        
    }
}
 
print(20);

console.log(count);

