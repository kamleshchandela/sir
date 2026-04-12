import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Props from './components/Props'
import './App.css'

function App() {
  const [count, setCount] = useState(0) ;
  let useName = "Kamlesh" ;

  return (
    <>
      <Props name={useName}></Props>
    </>
  )
}

export default App
