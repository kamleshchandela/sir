
// method 1


var str = "kamlmak chandela kamlesh kamo";
var count = 0;
var str1 = "";

for (var i = 0; i < str.length  ; i++ ){
    if(str[i] == " " ){
        // console.log("ok");
    }
    else{
        str1 = str1 + str[i];
    }
    
}

console.log(str1);



// method 2


var str = "kamlmak chandela kamlesh kamo";
var arr = str.split(" ");
console.log(arr.join(""));













