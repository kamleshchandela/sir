var arr = [1, 2, 3, 5 , 4, 5 , 4 ];
var arr1 = [] ;
var num = 1;
for ( let i = 0 ; i < arr.length ; i++ ){
    
    for (let j = 0 ; j < i ; j++){
        
        if( arr[i] == arr[j] ){
                num = 0;
            }   

    }

        if(num == 1){
            arr1.push(arr[i]);
        }

        
    
}

console.log(arr1);



    const obj = {};
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if (!obj[item]) {      
            obj[item] = true;  
            result.push(item); 
        }
    }

  console.log(obj);







