

// niche vale code me max kiya he parvaha min ki bat horahi he to max ki jagah min samaj na aagevale code me thodasa chenj kiyahe or jyada time na bigade isliye ye kiya

var arr = [10, 5, 8, 20, 18 , 22 , 6 , 12 , 4];
var arr1 = [];
var max1 = Infinity;   // negative value ke liye jo -Infinity se to badihi hogi
var max2 = Infinity;   // negative value ke liye jo -Infinity se to badihi hogi
var check = 0;

for ( let i = 0 ; i < arr.length ; i++ ){
    for( let j = 0 ; j < arr.length ; j++ ){
        if(max1 > arr[i]){
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
        if(max2 > arr1[i]){
            
            max2 = arr1[i];
            
        }
    }
}

console.log(max2);










