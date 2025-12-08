
// method 1

console.log(String.fromCharCode(122));  //97 , 122

var str = "Kaml eZshf ";
var count = 0;

for(let i = 0; i < str.length ; i++){
    if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
        count ++;
    }
}

console.log(count);



// mehthod 2

var count2 = 0;
var check;

for(let i = 0; i < str.length ; i++){
    check = str[i].toUpperCase();
    if(check == str[i]){
        count2 ++;
    }
}

console.log(count);






