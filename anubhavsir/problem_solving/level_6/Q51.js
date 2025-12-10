var arr = [ 1 , 2 , 3 , 4 , 5];
var autput = "";

for( let i = 0 ; i < arr.length ; i++ ){

    // method 1
    console.log(arr[i]);


    // method 2
    autput = autput + " " + arr[i];
}


// method 2
console.log(autput);

// method 3
console.log(...arr);

// method 4
console.log(arr.join(" "));





