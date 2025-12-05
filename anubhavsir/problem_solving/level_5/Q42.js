var str = "kamlmAk chandela kamlesh kamo";
var str1 = "";
for(let i = 0; i < str.length ; i++ ){
    if(str[i] == "a"){
        str1 = str1 + "e"; 
    }
    else if(str[i] == "A"){
        str1 = str1 + "E"; 
    }
    else{
        str1 = str1 + str[i]; 
    }
}

console.log(str1);












