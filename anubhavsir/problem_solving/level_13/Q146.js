
var str = "Are you ok?" ;
var str1 = "" ;


for(let i in str){
    // console.log(str[i]);
    if(str[i] == "?"){
        str1 = str1 + "!"; 
    }
    else{
        str1 = str1 + str[i]; 
    }
    
}

console.log(str1)








