var str = "kmemkmkikmkokmkmumkAKMEKMKMIKMKOKMKMU";
var arr1 = str.split("");
// console.log(arr1.length);
let i = 0;
while(i >= 0){
    

    if(i == undefined){
        break;
    }
    if(arr1[i] == "a" || arr1[i] == "e" || arr1[i] == "i" || arr1[i] == "o" || arr1[i] == "u" || arr1[i] == "A" || arr1[i] == "E" || arr1[i] == "I" || arr1[i] == "O" || arr1[i] == "U" ){
        console.log(i+1 ,":" , arr1[i])
    }
    
    
    i++;
}