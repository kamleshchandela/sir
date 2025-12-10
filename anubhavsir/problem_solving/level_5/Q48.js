
// method 1

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




// method 2

var str2 = "aeiouAEIOU";
var str3 = "";

for(let i = 0 ; i < str.length ; i++){
    if(str2.includes(str[i])){
        continue;
    }
    else{
        str3 = str3 + str[i];
    }
}

console.log(str3);




















