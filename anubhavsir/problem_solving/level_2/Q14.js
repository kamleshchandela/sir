var N = 13;
var arr = [];


for (let i = 1;i <= N;i++){
    
    if(i % 2 == 1){
        console.log(i);
        arr.push(i);
    }
    
}

console.log(...arr);


