
// method 1
var str = "kamlesh";
var i = 0;
var count = 0;

while(str[i]){
    count ++;
    i++;
}

console.log(count)


// method 2
console.log(str.length)


// Q ka ans yaha he
function length (e) {
    if(e.length > 5){
        console.log(true);

    }
    else{
        console.log(false);

    }
}

length("kamlesh")





