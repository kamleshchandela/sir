
// method 1

var str = "kamlmak chandela kamlesh kamo";

var arr = str.split(" ");

console.log(arr);
console.log(arr.length);



// method 2
// method run nahi ho rahi

var str = "kamlmak chandela";
var count = 1;
for(let i = 0; i < str.length ; i++){
    if(str[i] == " "){
        count++;
        if(str[i + 1] == undefined || str[i - 1] == undefined){
            count--;
        }
    }
    
}











