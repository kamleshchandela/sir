import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



document.addEventListener("wheel" , (e)=>{
  if(e.deltaY > 0){
    console.log("okoko");
    document.querySelector(".nav").style.marginTop = "-10vw";
  }
  else{
    document.querySelector(".nav").style.marginTop = "0vw";
  }
})






document.addEventListener("keypress" , (e)=>{
  if(e.key == "Enter"){
    document.querySelector(".search").value = "" ;
  }
})

function App() {

  return (
    
    // fragment tag <> </>
    <> 
    
      <div className="nav">
        <img src= 'https://res.cloudinary.com/dsuhb6swy/image/upload/v1765342049/menu-icon-png-3-lines-11552728985kzvoymuey0_w6isn1.png' alt="" className="ham" />
        <img src= 'https://res.cloudinary.com/dsuhb6swy/image/upload/v1765342184/logo_inshorts_pqtpqg.png' alt="" className="logo1" />
        <input type="text" placeholder="Explore news…" class="search"></input>
      </div>

      
    
    </>
  )
}

export default App
