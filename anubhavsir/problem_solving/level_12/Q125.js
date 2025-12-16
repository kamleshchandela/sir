var sum = 0;
function print (e) {
    for (let i = e ; i >=1 ; i-- ){
        if(i % 2 == 0){
            sum = sum + i ;
        }
        
    }
}
 
print(6);

console.log(sum)

