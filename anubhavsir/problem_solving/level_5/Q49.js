var str = " K2aml 1 3 4 es h "
var str1 = "";
for(let i = 0 ; i < str.length ; i++){
    if(str[i] == "1" || str[i] == "2" || str[i] == "3" || str[i] == "4" || str[i] == "5" || str[i] == "6" || str[i] == "7" || str[i] == "8" || str[i] == "9" || str[i] == "0" ){
        continue;   // yaha continue nahi likhege tobhi chalega kyu ki continue => ye step ke bad vale stpe me jao yato continue na likheto is stape me kuchh mat karo jisse koibhi dikkat nahia aayegi 
    }
    else{
        str1 = str1 + str[i];
    }
}

console.log(str1);




// method 2

var str = " K2aml 1 3 4 es h "
var str1 = "";
for(let i = 0 ; i < str.length ; i++){
    if(str[i] >= 0 && str[i] <= 9 && str[i] != " "){
        continue;   // yaha continue nahi likhege tobhi chalega kyu ki continue => ye step ke bad vale stpe me jao yato continue na likheto is stape me kuchh mat karo jisse koibhi dikkat nahia aayegi 
    }
    else{
        str1 = str1 + str[i];
    }
}

console.log(str1);










