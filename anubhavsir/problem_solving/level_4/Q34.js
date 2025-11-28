
let str="kamleshas";

let str2="aeiouAEIOU"
var count = 0;
for(let i=0;i<str.length; i++){
if(str2.includes(str[i]) == false){
count++;
}
}

console.log(count);


