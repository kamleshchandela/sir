import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const ok = useRef(null) ;
  const q = useRef(null) ;
  const w = useRef(null) ;
  const e = useRef(null) ;
  const q1 = useRef(null) ;
  const w1 = useRef(null) ;
  const e1 = useRef(null) ;
  console.log(ok.value)

  function set (e) {
    console.log(ok.current.value)
    setCount(Number(count) + Number(ok.current.value));
    
  }
  function set1 () {
    q.current.innerText = q1.current.value;
    w.current.innerText = "oko";
    e.current.innerText = "oko";
  }

  return (
    <>
      <div className="ans">count : {count}</div>
      <input ref={ok} type="text" />
      <button onClick={set}>click me!</button>


      <form action="">
        <label htmlFor="qw">Name : </label>
        <input ref={q1} id='qw' type="text" />
        <label htmlFor="qw1">Age : </label>
        <input ref={w1} id='qw1' type="number" />
        <label htmlFor="qw2">Mobile No. : </label>
        <input ref={e1} id='qw2' type="number" />
        <button onClick={set1}>click me!</button>

        <div ref={q}></div>
        <div ref={w}></div>
        <div ref={e}></div>
      </form>



      




    </>
  )
}

export default App
