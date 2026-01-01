var arr = [1, 2, 3, 4, 5] ;
var target = 10 ;
var check = 1 ; 

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[i] + arr[j] + arr[k] == target && check == 1 && i != j && j != k && k != i) {
                console.log(true);
                check = 0;
                // console.log(arr[i])
                // console.log(arr[j])
                // console.log(arr[k])
                break;
            }
        }
        
    }
    
}

if(check == 1){
    console.log(false) ;
}




