// GCD etle
// 12 => 1, 2, 3, 4, 5, 6, 7, 8, 7, 8, 9, 10, 11, 12 ......
// 12 % i == 0  ===>> 1, 2, 3, 4, [6]  
// 18 => 1, 2, 3, 4, 5, 6, 7, 8, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ......
// 18 % i == 0  ===>> 1, 2, 3, [6], 9 

// banne bhagai tevo number and annema koman aavjoie tevo sauthi moto number ===>> 6 

// last same is 6 GCD => 6



var a = 12;
var b = 18;
var arr1 = [];
var arr2 = [];
var arr3 = [];



for(let i = 1; i <= a;i++){
    if(a%i == 0){
        arr1.push(i);
       

        
    }
    
}
// console.log(arr1);



for(let i = 1; i <= b;i++){
    if(b%i == 0){
        
        arr2.push(i);
        
    }
    
}

// console.log(arr2);


for(let i = 0; i < arr1.length; i++){
    for(let j = 0;j< arr2.length; j++){
        if(arr1[i] == arr2[j]){
            // console.log(arr1[i]);
            arr3.push(arr1[i]);
        }
    }
}

// console.log(arr3);

console.log(`GCD of Two Numbers ${a} ${b} is => ${arr3[arr3.length - 1]}`);







