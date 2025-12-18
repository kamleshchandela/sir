
var btn = document.querySelector("#n4");
var btn1 = document.querySelector("#n1");
var btn2 = document.querySelector("#n2");
var btn3 = document.querySelector("#n3");
var data = document.querySelector(".data");

btn.addEventListener("mouseenter",enter)

// btn.addEventListener("mouseleave",()=>{
//     data.addEventListener("mouseenter",()=>{
//             btn1.style.transform = "translateX(-34vw)" ;
//             btn2.style.transform = "translateX(-23vw)" ;
//             btn3.style.transform = "translateX(-12vw)" ;
//     })
//     })
        
function enter () {
    btn1.style.transform = "translateX(-34vw)" ;
    btn2.style.transform = "translateX(-23vw)" ;
    btn3.style.transform = "translateX(-12vw)" ;


    data.style.width = "45vw"
    document.querySelector(".nav").style.gap = "32vw"

    document.querySelector("#l1").style.transform = "rotateZ(45deg)"
    document.querySelector("#l1").style.position = "absolute"
    
    document.querySelector("#l2").style.display = "none"
    // document.querySelector("#l2").style.height = "0"
    document.querySelector("#l3").style.transform = "rotateZ(-45deg)"
    document.querySelector("#l3").style.position = "absolute"
    document.querySelector("#l3").style.marginTop = "0.15vw"
    // btn.style.gap = "0"
}


function leave(){
    setTimeout(()=>{


        data.style.width = "12vw"
        document.querySelector(".nav").style.gap = "65vw"

        btn1.style.transform = "translateX(0)";
        btn2.style.transform = "translateX(0)";
        btn3.style.transform = "translateX(0)" ;

    document.querySelector("#l1").style.transform = "rotateZ(0deg)"
    
    // btn.style.gap = "1vw"
    
    document.querySelector("#l3").style.transform = "rotateZ(0deg)"
    
    document.querySelector("#l3").style.marginTop = "0vw"

    setTimeout(()=>{
        document.querySelector("#l2").style.display = "flex"
        
        document.querySelector("#l3").style.position = ""
        document.querySelector("#l1").style.position = ""
        // document.querySelector("#l2").style.height = "0.3vw"
        
    },
    300


)

    


    } ,
    800

)
    
 
}







// data.addEventListener("mouseleaver",()=>{
//             btn1.style.transform = "translateX(0)" ;
//             btn2.style.transform = "translateX(0)" ;
//             btn3.style.transform = "translateX(0)" ;
//     })
    


btn.addEventListener("mouseleave",leave) ;



data.addEventListener("mouseenter",enter) ;
data.addEventListener("mouseleave",leave) ;

// btn1.addEventListener("mouseenter",enter) ;
// btn1.addEventListener("mouseleave",leave) ;

// btn2.addEventListener("mouseenter",enter) ;
// btn2.addEventListener("mouseleave",leave) ;

// btn3.addEventListener("mouseenter",enter) ;
// btn3.addEventListener("mouseleave",leave) ;






