
// LCM etle
// 3 => 3, 6, 9, 12, 15, 18, 21 ......
// 9 => 9, 18, 27, 36, 45, 54, 63 ......

// first same is 9 LCM => 9




var a = 3;
var b = 9;
var arr1 = [];
var arr2 = [];
var count = true;
var i = 1;
while(i < 10000){
    arr1.push( a * i );
    arr2.push( b * i );
    i++;
}
// console.log(arr1)
// console.log(arr2)

for(let i = 0 ; i<arr1.length ; i++){
    for (let j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j]){
            console.log(arr1[i]);
            count = false;
            

        }
        if(count === false){
            break;
        }
    } 
}





