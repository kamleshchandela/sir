       
// var ok = document.querySelector(".h1");
// // ok.textContent = "okok";

// document.body.addEventListener("click",
//     function(){
//         ok.style.color = "white";
//         document.body.style.backgroundColor = "red";
//         ok.textContent = "KESE HO ??";
//     }
// );


// console.log(ok);  


// var count = 0;
//  function add1 ( a , b ) {
//     if(count < 5){
//         count++;
//     var a = Number(alert("Enter first number:"));
//     // var b = Number(alert("Enter first number:"));
//     console.log(a+b);}
//     else{
//         clearInterval(setInterval( add1 , 3000));
//     }
//  }

//   setInterval( add1 , 3000);

// var P = document.querySelector("p");
// const ok = {
//     color : 'red',
    
// }

// Object.assign(P.style,ok);




// var kamlesh = document.createElement('h1') ;
// kamlesh.textContent = "kamlesh";
// document.body.appendChild(kamlesh);





// var div1 = document.querySelector(".div3");
// var myname = document.createElement("h1");
// myname.textContent = "child";
// div1.append(myname);




// if(-1){
//     console.log("kamo");
    
// }




// var para1 = document.querySelector(".para1");
// var para2 = document.querySelector(".para2");
// var para3 = document.querySelector(".para3");
// var para4 = document.querySelector(".para4");
// var para5 = document.querySelector(".para5");

// para1.classList.add("para11");


// var para = document.querySelectorAll("p");

// para[1].style.fontSize = "3vw";
// para[1].style.backgroundColor = "pink";

// para4.classList.remove("para4");






var img = document.querySelector(".img");
var next = document.querySelector(".next");

console.log(next)

var arr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2g-Lqk9VS9NHKNeWQI5CvzsPf42bC_wINFw&s",
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
];


var i = 0;
next.addEventListener("click",function(){
    
    img.setAttribute('src',arr[i]);
    i++;
    if(i==4){
        i=0;
    }
})









