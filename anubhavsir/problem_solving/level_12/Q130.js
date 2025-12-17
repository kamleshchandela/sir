
var n1 = 8 ;
var n2 = 15 ;
var arr1 = [] ;
var arr2 = [] ;

function check (){

    for(let i = 0 ; i <= n1 ; i++ ){
        if(n1 % i == 0){
            arr1.push(i);
        }
    }


    for(let i = 0 ; i <= n2 ; i++ ){
        if(n2 % i == 0){
            arr2.push(i);
        }
    }



console.log(arr1)
console.log(arr2)
var k ;

arr1.forEach((e1)=>{
    arr2.forEach((e2) => {
        if(e1 == e2){
            k = e1 ;
        }
    });
})

console.log(k)

if(k == 1){
    console.log(n1 , n2 , "Co-prime Numbers");
}
else{
    console.log(n1 , n2 , "NOT Co-prime Numbers");
}




}




check()

