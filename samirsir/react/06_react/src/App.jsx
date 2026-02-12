import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  // setCount(["oorange" , "apple" , "mango" , "grapes" , "guava" , "papaya"]);
  const arr = ["orange" , "apple" , "mango" , "grapes" , "guava" , "papaya"] ;
  function atoz() {
          {setCount(arr.sort())}
        
      }
  function ztoa() {
          {setCount(arr.sort().reverse())}
        
      }
  var a = "abcdefghijklmnopqrstuvwxyz" ;
  return (
    <>
      <p>{arr}</p>
      <button onClick={atoz}>a-z</button>
      <button onClick={ztoa}>z-a</button>
      {/* <div>{count}</div> */}


        {

          count.map((e)=>{
            return(<p>{e}</p>) ;
          })

        }
      
      


    </>
  )
}

export default App ;
