var str = " Kamles h "
var str1 = "";
for(let i = 0 ; i < str.length ; i++){
    if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U" ){
        continue;
    }
    else{
        str1 = str1 + str[i];
    }
}

console.log(str1);



