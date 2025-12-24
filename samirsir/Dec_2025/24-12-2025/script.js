import foot from "./script3.js";
import cm from "./script2.js";
import mile from "./script1.js";

var btn = document.querySelector(".btn")
var a = document.querySelector("#id1")
var b = document.querySelector("#id2")
var str = "" ;


  a.addEventListener("input" , (e)=>{
    str = str + e ;
    console.log(str)
  })
    var ans = a.value ;
    var que = b.value ;



    function total () {



        
  
  if(a.value != "" && b.value != ""){


    a.style.border = "2px solid black" ;
    b.style.border = "2px solid black" ;

    
        ans = a.value ;
        que = b.value ;



        var mile11 = mile(ans) ;
        var cm11 = cm(ans) ;
        var foot11 = foot(ans) ;

        console.log(mile11)
        console.log(cm11)
        console.log(foot11)




        


        if(que.toLowerCase() == "km"){
            document.querySelector(".km").textContent = "KM : " + mile11 ;
        }
        else if(que.toLowerCase() == "cm"){
            document.querySelector(".km").textContent = "CM : " + cm11 ;
        }
        else if(que.toLowerCase() == "foot"){
            document.querySelector(".km").textContent = "FOOT : " + foot11 ;
        }
        else{
            b.style.border = "2px solid red" ;
            b.value = "" ;
        }
        
        
  }

  else{
    if(a.value == ""){
        a.style.border = "2px solid red" ;
    }
    else{
        b.style.border = "2px solid red" ;
    }
  }
  
  
  
  
    
   














    }












btn.addEventListener("click" , total)


import { name } from "./script2.js";
conaole.log(name)


