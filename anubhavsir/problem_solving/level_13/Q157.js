
var str = "hello@123" ;
var count = 1 ;

for (let i in str){
    if ( ( str[i] == "!" || str[i] == "@" || str[i] == "#" || str[i] == "$" || str[i] == "%" || str[i] == "^" || str[i] == "&" || str[i] == "?" || str[i] == "~" || str[i] == "/" ) && count == 1){
        console.log(false) ;
        count = 0 ;
        break ;
    }
}

if(count == 1){
    console.log(true);
}




