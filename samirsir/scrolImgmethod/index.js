// TOPIC 1

// DOM = Document / Object / Model
        //  ^         ^         ^  
        //  |         |         |
        // html | js object | structure bluprint

// js sincrones lenguage he (code ko line by line kadhta he)

//            Brousur                                                   
//              |
//           Document
//              |
//             html
//              |
//          ----------
//          |        |
//        head      body
//          |        |
//   ------------   --------
//   |    |     |   |  |   |
//   1    2     3   p  h  div 
//               
//  object (js) brouser ko puchhe ga fir brovse body me jaka tag ko dhundega 
// 

// Topic 2

// Element Acces + Objection
//  |
//  |----> document.quarySelector('h1');
//  |         |
//  |         ------> obj.add(12,10);
//  |                 |    |     |
//  |          document key(obj) function argument(model)
//  |----> document.quarySelectorAll('h1');
//  |
//  |----> document.getElementById/ClassName('main');


// Topic 3

//  isco acses karne ke liye console.log(document.getElementById/ClassName('main')) ka use karna he  

// Acces kaene ke liye
// <html> ------> <h1> kamlesh </h1>
// var inText = document.quarySelector('h1');
// inText.textContent = "majama";
// console.log(inText);  

// eksath bahutsari css proper ti aplai karneke liye harlinme 
//     |
//     |----> varname.style.color = "red";
//            varname.style.padding = "10px";
//            
//            ya fir eksath sab karni ho to-------
//                                                |
//                                          varname.style.obj ----
//                                                                |
//                                                             var obj = {
//                                                                  color = "red",
//                                                                  padding = "10px",
//                                                                  backgroundColor = "green"
//                                                                       }
//
//

// Topic 4

//Event Listener ----------------------------
//  |                                       |
// specific action keliye              Continuously dhyan rakhta he koi event huaa ki nahi (backend me)
//  |
// user                 
// 

// Topic 5

//  setInterval(    ,  5000  )   ------------------------------------|
//     |         |       |                                     { clerInterval(id) }  -------  infinit loop band ho jayega
//   time   function   milli Second



// Topic 5

// storage

// localStorage.setItem (key , value);       [permannet]
// sessionStorage.setItem (key , value);     [temporary]
//                          |       |
//                        name    kamlesh
//

















