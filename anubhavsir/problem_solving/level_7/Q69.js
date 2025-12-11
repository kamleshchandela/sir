
// method 1

var arr = [10, 5, 8, 20, 18 , 22 , 6 ];
var arr1 = [];
var max1 = -Infinity;   // negative value ke liye jo -Infinity se to badihi hogi
var max2 = -Infinity;   // negative value ke liye jo -Infinity se to badihi hogi
var check = 0;

for ( let i = 0 ; i < arr.length ; i++ ){
    for( let j = 0 ; j < arr.length ; j++ ){
        if(max1 < arr[i]){
            max1 = arr[i];
            check = i;
            
        }
    }
}

for(let i = 0 ; i < arr.length ; i++){
    if(i != check){
        arr1.push(arr[i]);
    }
    
}

for ( let i = 0 ; i < arr1.length ; i++ ){
    for( let j = 0 ; j < arr1.length ; j++ ){
        if(max2 < arr1[i]){
            
            max2 = arr1[i];
            
        }
    }
}

console.log(max2);




// method 2

var max=-Infinity;
var smax=-Infinity;

for(let i=0;i<arr.length; i++){
if(arr[i]>max){
max=arr[i];
}
}


for(let i=0;i<arr.length; i++){
if(arr[i]>smax && arr[i]<max){
smax=arr[i];
}
}

console.log(smax);



// method 3

var max = -Infinity;
var smax = -Infinity;

for(let i=0;i<arr.length;i++){
if(arr[i]>max){

smax=max;

max=arr[i];
}

else if(arr[i]>smax && arr[i]<max){
smax=arr[i];
}

}

console.log(smax)

