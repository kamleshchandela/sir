
var arr = [{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 70}] ;
var obj = {} ;
var max = -Infinity ;
var index = 0 ;
for (let i in arr){
    
    if(arr[i].marks > max){
        max = arr[i].marks ;
        index = i;
    }
}

console.log(arr[index].name);
console.log(arr[index].marks);
console.log(arr[index]);



























