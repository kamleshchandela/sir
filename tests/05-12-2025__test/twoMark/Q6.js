var obj = {
            name:"Riya",
            marks:[89,76,92]
        }

var length = obj.marks.length;
var total = 0;

console.log(obj.name);


for(let i = 0; i < length ; i++){
    console.log(obj.marks[i]);
    total = total + obj.marks[i];
}

console.log("total : " , total);






