const data = { 
students: [{ name: "Krishna", scores: [78, 82, 91] }, { name: "Dev", scores: [85, 88, 95] }], 
extra: [10, 5, 15, 20], 
active: true, 
};
var sum1 = 0;
var sum2 = 0;

var length = data.students[0].scores.length;

for(let i = 0; i < length ; i++){
    sum1 = sum1 + data.students[0].scores[i];
    sum2 = sum2 + data.students[1].scores[i];
}




if(sum1 > sum2){
    console.log(data.students[0].name);
    console.log("average : " , sum1/length);
}
else{
    console.log(data.students[1].name);
    console.log("average : " , sum2/length);
}











