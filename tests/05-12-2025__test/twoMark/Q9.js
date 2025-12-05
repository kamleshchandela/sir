const data = { 
students: [{ name: "Krishna", scores: [78, 82, 91] }, { name: "Dev", scores: [85, 88, 95] }], 
extra: [10, 5, 15, 20], 
active: true, 
};
var length = data.extra.length;
var arr = data.extra;
var temp ;

for (let i = 0 ; i < length ; i++){
    console.log("1 : " , arr);
    for (let j = 0 ; j < length ; j++ ){
        if(arr[j] < arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
        console.log("2 : " , arr);
    }
}




var max = arr[0];
var min = arr[length - 1];
console.log("max : " , max );
console.log("min : " , min );











