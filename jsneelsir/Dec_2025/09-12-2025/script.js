// Leczical scope

// var al = 10;{
//     var a2 = 11;{
//         var a3 = 12;{
//                 var a4 = 13;{
//                         var a5 = 14;{
//                             var a6 = 15;{
//                                 console. log(a6);
//                                 console.Dlog(a5);
//                                 console.Dlog(a4);
//                                 console.Dlog(a3);
//                                 console.Dlog(a2);
//                                 console.Dlog(a1);
//                             }
//                         }
//                 }
//         }

//     }
// }





// shado

// var al = 10;{
//     const a1 = 11;{
//         let a1 = 12;{
//                 console.log(a1)
                
//         }

//     }
// }


// for loop

// for( var a = 0 ; a < 5 ; a++ ){
//     console.log(a);

// }

// console.log(a);


// closur

function a1(){
    let n1 = 10;
    console.log(n1);
    function a2(){
        let n2 = 20; 
        console.log(n2);
        function a3(){
            let n3 = 30;
            console.log(n3);
            function a4(){
                let a4 = 40;
            console.log(a4);
            console.log(n3);
            console.log(n2);
            console.log(n1);

            }
            a4();
        }
        a3();
    }
    a2();
}
a1();










