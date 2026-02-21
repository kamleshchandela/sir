import { useState  , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , increment5 , api , num , decrement5} from '../src/redux/features/counterslice'
import './App.css'
import { useEffect } from 'react'
import Check from './redux/check.jsx'
import { useReducer } from 'react'




function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const ok = useRef() ;
  const [num1 , setnum] = useState(1) ;
 
 
  function ok1 (e) {
    
    console.log(e.target.value)
    setnum(Number(e.target.value)) ;
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={
        () => dispatch(increment()) 
      }>
        inc 1
      </button>

      <button onClick={
        () => dispatch(decrement())
      }>
        dec 1
      </button>

      <button onClick={
        () => dispatch(increment5())
      }>
        inc 5
      </button>

      <button onClick={
        () => dispatch(decrement5())
      }>
        dec 5
      </button>

      <button onClick={
        () => dispatch(api()) 
      }>api</button>

      <button onClick={()=>dispatch(num(num1))}>
        incres by : {num1}
      </button>


      <input ref={ok} onChange={ok1} type="number" />





      <Check />
    </>
  )
}

export default App
