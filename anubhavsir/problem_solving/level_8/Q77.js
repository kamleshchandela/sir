
var arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 ];
var count = 0 ;
var sum = 0 ;


for ( let i = 0 ; i< arr.length ; i++ ){
    sum = sum + arr[i];
}

var avr = sum / arr.length;
console.log("average is :" , avr)


for ( let i = 0 ; i< arr.length ; i++ ){
    if ( arr[i] > avr ){
        count ++;
    }
}
 

console.log("Elements Greater than Average is :" , count)




