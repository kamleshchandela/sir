import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/appName'
import AddTodo from './components/addTodo'
import TodoItems from './components/todoitems'
import TodoItems1 from './components/todoItemData'

function App() {
  const [count, setCount] = useState(0)



  var arr = [
    {
      name : "kamlesh1" , 
      dueDate : "date1"
    } ,
    {
      name : "kamlesh2" , 
      dueDate : "date2"
    } ,
    {
      name : "kamlesh2" , 
      dueDate : "date2"
    }
  ] 

  return (
    
    <center className='todo-container'>
      <AppName />


      <div className="data">
        
        <AddTodo />

        <TodoItems1 arr = {arr} /> 

        


        

      



      </div>
    </center>
    





  )
}

export default App
