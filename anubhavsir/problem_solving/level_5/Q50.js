
// method 1

var str = "KamleKsAhkamLESHkamlrSH";
var str1 = "";

for (let i = 0; i < str.length ; i++){
    if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
        str1 = str1 + String.fromCharCode(str.charCodeAt(i) - 32);
    }
    else if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        str1 = str1 + String.fromCharCode(str.charCodeAt(i) + 32);
    }
    else{
        str1 = str1 + str(i);
    }
}

console.log(str1);



// method 2


var str11 = "kamleshchanDELA";
var str12 = "";



for ( let i = 0 ; i < str11.length ; i++ ){
    if(str11[i] == str11[i].toUpperCase()){
        str12 = str12  + str11[i].toLowerCase();
    }
    else{
        str12 = str12  + str11[i].toUpperCase();
    }
}

console.log(str12);

























