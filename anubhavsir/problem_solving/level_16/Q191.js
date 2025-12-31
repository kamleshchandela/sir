
// binary search method

var arr = [2, 5, 8, 12, 16, 23, 38, 56];
var l = 38;
var i = 0;
var k = arr.length - 1;
var j = Math.floor((i + k ) / 2)
while (j > i) {
    if (arr[j] < l) {
        i = j + 1;
        j = Math.floor((i + k) / 2);

    }
    else {
        k = j - 1;
        j = Math.floor((i + k) / 2)
    }
    if (arr[j] == l) {
        console.log(l);
        console.log(j);
        break;
    }
}








// besic method
var arr = [1, 3, 5, 7, 9];
var k = 5;
var count = 1;

for (let i in arr) {
    if (arr[i] == k && count == 1) {
        console.log(i);
        count = 0;
        break;
    }

}

if (count == 1) {
    console.log("-1")
}




