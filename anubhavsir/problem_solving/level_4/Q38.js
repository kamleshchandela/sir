var str = "kamlmak";
var count = 1;

for (var i = 0; i < str.length  ; i++ ){
    if(str[i] == str[str.length - i - 1]){
        count = 1;
    }
    else{
        count = 2;
        break;
    }
    
}

if(count == 2){
    console.log(`No Palindrome`);
}
else{
    console.log(`Palindrome`);
}
















