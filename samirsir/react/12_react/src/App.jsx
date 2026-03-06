import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function add (num) {
  return num + 5 ;
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="w-[100%] h-[50vw] border-[0.2vw] border-red-600 hover:{add()}"></div>
      <div style={{}} className='bg-red-200 w-[50px] h-96 border-2 border-indigo-600 hover:bg-black'></div>
    </>
  )
}

export default App ;
