import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

async function name12 () {

  var n1 = await fetch("https://jsonplaceholder.typicode.com/users") ;
  return n1.json() 
}

console.log(name12())

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <div className="box">
        <div className="b1">
            <p>count : {count1}</p>
            <button onClick={()=>setCount1(count1 => count1 + 1)}>+1</button>
        </div>
        <div className="b1">
            <p>count : {count2}</p>
            <button onClick={()=>setCount2(e => e + 5)}>+1</button>
        </div>
        
      </div>
    </>
  )
}

export default App
