var arr =  [1,2,3,4,5,6];
var arr1 = [];
var sum = 0;

for (let i = 0; i < arr.length ; i++){
    if(arr[i] % 2 ==0){
        arr1.push(arr[i]);
        console.log(arr[i]);
        sum = sum + arr[i];
    }
}
console.log(arr1);
console.log("count : " , arr1.length);
console.log(sum);


