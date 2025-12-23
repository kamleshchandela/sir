import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/heading'
import Slogan from './components/clockslogan'
import CurrentTime from './components/currentTime'

function App() {
  
  return (
    <div className="container">

      <Heading  />
      <Slogan />
      <CurrentTime />


    </div>
  )
}

export default App
