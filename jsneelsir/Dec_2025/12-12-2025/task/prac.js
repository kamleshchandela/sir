class a {
    constructor ( v1 , v2 ){
        this.v1 = v1;
        this.v2 = v2;
    }
    
}
class b {
    constructor ( v3 ){
        this.v3 = v3;
        
    }
    
}

var obj = new b ("okok")

console.log(obj.v3);
console.log(obj.v1);
console.log(obj.v2);


function main (){
class car {
    constructor( brand , price ){
        this.brand = brand ;
        this.price = price
    }
    static method_1(){
        console.log("method 1")
    }
    
}


class owner extends car {
    constructor( brand , price , name , date ){
        super( brand , price );
        this.name = name ;
        this.date = date
    }
    
    kamo(){
        console.log("method12345")
    }
}

class owner1 extends owner {
    constructor( brand , price , name , date ){
        super( brand , price );
        this.name = name ;
        this.date = date
    }
    
}

var obj1 = new car ( "qwe" , 12345 );
var obj2 = new owner ( "qwe" , 12345 );

car.method_1();
owner.method_1();
owner1.method_1();
owner1.kamo();

}

main();
















