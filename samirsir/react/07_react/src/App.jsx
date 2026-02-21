import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Check from './components/check'
import './App.css'

// useReducer

function reducer (state , action) {
    switch (action.type){
      case "add" : return {age : state.age + 1 , name : state.name} ;
      case "sub" : return {age : state.age - 1 , name : state.name} ;
    }
    
}

var initial = {age : 18 , name : 'kamo'} ;

function App() {
  const [count, setCount] = useState(0)
  const [state , dispatch] = useReducer(reducer , initial)

  return (
    <>

    <p>
      {state.age}
    </p>

    <p>
      {state.name}
    </p>


    <Check states={state} fun={dispatch} />
    <button onClick={()=>{dispatch({type : "add"})}}>++ 1</button>
    <button onClick={()=>{dispatch({type : "sub"})}}>-- 1</button>

    
      


    </>
  )
}

export default App
