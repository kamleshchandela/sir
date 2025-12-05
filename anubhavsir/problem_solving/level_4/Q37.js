
// method 1

var str = "kamlesh";
var str1 = str.split("").reverse();
str = str1.join("");
console.log(str);





// method 2

var str = "kamlesh";
var str1 = "";

for (var i = str.length - 1; i >= 0 ; i-- ){
    str1 = str1 + str[i] ;
    
}

console.log(str1);































