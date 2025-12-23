import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/appName'
import AddTodo from './components/addTodo'
import TodoItems from './components/todoitems'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <center className='todo-container'>
      <AppName />


      <div className="data">
        
        <AddTodo />

        <TodoItems />

        <TodoItems />


        

      



      </div>
    </center>
    





  )
}

export default App
