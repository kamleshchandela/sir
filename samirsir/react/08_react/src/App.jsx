import { useState , createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Check from './components/check'
import { CounterContext } from './components/context'
import { namecon } from './components/nametext'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("kamlesh chandela")
  
  return (
    <>
      

      <CounterContext.Provider value={count}>
          <Check></Check>

      </CounterContext.Provider>



      <namecon.Provider value={name}>
        <Check />
      </namecon.Provider>
      




    </>
  )
}

export default App ;
