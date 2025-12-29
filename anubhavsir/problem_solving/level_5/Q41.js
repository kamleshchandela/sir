
// method 1

var str = "kamlmak chandela kamlesh kamo";

var arr = str.split(" ");

console.log(arr);
console.log(arr.length);



// method 2


var str = "      kamlmak cha    ndela kam       ";
var count = 1;
for(let i = 0; i < str.length ; i++){
    if(str[i] == " "){
        count++;
        if(str[i + 1] == undefined || str[i - 1] == undefined || str[i + 1] == " " ){
            count--;
        }
    }
    console.log(count)
    
}
if(str[0] == " "){
    // agar starting me extra space aatihe to ans galat aata he is liye yaha par count-- ka use kiya he 
        count--;
    }
console.log(count)



// method 3
// basick and method 2 se bhi easy

function countWords(string) {
    let count = 0;
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " " && (i == 0 || string[i - 1] == " ")) {
            count++;
        }
    }

    console.log(count);
}

countWords("      kamlmak cha    ndela kam      ");








