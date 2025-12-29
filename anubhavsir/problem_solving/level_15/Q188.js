var arr = [12 , 15 , 13 , 18 , 21 , 22 , 25 , 11 , 9 , 8] ;

for(let i = 0 ; i <arr.length ; i++){
    if(arr[i] < arr[i - 1]){
            for(let j = i ; j >= 0 ; j--){
                if(arr[j] < arr[j-1]){
                        let temp = arr[j] ;
                        arr[j] = arr[j - 1] ;
                        arr[j - 1] = temp ;

                    }
        }
    }
    
    

}

console.log(arr) ;

