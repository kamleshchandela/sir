import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Click from './components/click'

// import {num} from './components/click'
import change from './components/change'
import Change from './components/change'
// console.log(num)


var arr = [
  "apple1" ,
  "banana2" ,
  "mango3" ,
  "apple4" ,
  "banana5" ,
  "mango6" ,
  "apple7" ,
  "banana8" ,
  "mango9" ,
  "apple10" ,
  "banana11" ,
  "mango12" ,
  "apple13" ,
  "banana14" ,
  "mango15" ,
]


var obj = {
  apple1 : "apple" ,
  banana2 : "apple" ,
  mango3 : "apple" ,
  apple4 : "apple" ,
  banana5 : "apple" ,
  mango6 : "apple" ,
  apple7 : "apple" ,
  banana8 : "apple" ,
  mango9 : "apple" ,
  apple10 : "apple" ,
  banana11 : "apple" ,
  mango12 : "apple" ,
  apple13 : "apple" ,
  banana14 : "apple" ,
  mango15 : "apple" 
}

function fun (e) {
  console.log(e.target.parentElement.innerHTML = "")
}




function App() {
  var [check , setcheck] = useState(false);
  var [color1 , setcolor] = useState(true) ;
  function box () {
    if(check){
      // console.log(false)
      setcheck(false)
    }
    else{
      setcheck(true)
    }
    
  }
  function color () {
    if(color1){
      console.log("okok")
      setcolor(false);
    }
    else{
      // console.log("okok2")

      setcolor(true);
    }
  }

  function ok (e) {
    // console.log(e.target.value);
    arr.filter((a)=>{
      (e.target.value == a)
      
    })
  }

  return (
    <>
      
    
      <Click color = {color} />


      {
        arr.map((e , i)=>{
          return(
            <>
            <div className="q">
              <p>{e}</p>
              <button key={i} onClick={fun}>{e}</button>
            </div>
              
            </>
          )
        })
      }

      
      <h1>obj</h1>

      

      {
        Object.keys(obj).map((e, i) => {
          return (
            <div className="q">
                    <p>{e}</p>
                    <button key={i} onClick={fun}>{e}</button>
            </div>
          )
        })
      }


      <div className="box">
          <p>{check == false ? "Error" : "Data"}</p>
          <button onClick={box}>{check == false ? "True" : "False"}</button>
      </div>


      <div style={{backgroundColor : color1?"red":"black"}}>color</div>


      


      <input onChange={ok} type="text" />
      {
        arr.map((e)=>{
          return (<div>{e}</div>)
        })
      }
      




    </>
  )
}

export default App
