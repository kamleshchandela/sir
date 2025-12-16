var sum = 0;
var arr = [];
function print (e) {
    for (let i = 0 ; i < e ; i++ ){
        if(e % i == 0){
            arr.push(i)
            sum = sum + i ;
        }
        
    }


    if(sum == e){
    console.log(true);
    }
    else{
    console.log(false);
    }      





}
 
print(28);

console.log(arr);
console.log(sum);
