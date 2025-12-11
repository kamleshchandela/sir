var arr = [ 1 , "a" , 3 , 4 , 3 , 4 , 5 , 3 ]
var check = "3";
var count = 0;

for ( let i = 0 ; i < arr.length ; i++ ){
    if(arr[i] == check){
        count++;
        
    }
    
}
console.log(count);





// method 2
count = 0;
var obj = {
    a : "4"
}

for(let i = 0; i < arr.length ; i++ ){
    if(arr[i] == obj.a){
        count++;
        
    }
}
console.log(count);


// method 3
count = 0;
arr.forEach((e)=>{
    if(e == obj.a){
        count++;
        
    }
})

console.log(count);




