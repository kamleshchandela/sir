import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Nav from '../src/components/nav'
import Project1 from './components/page1';
import Project2 from './components/project2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Nav/>
    <Routes>
      <Route path="/" element={<Project1 />} />
      <Route path="/api1" element={<Project1 />} />
      <Route path="/api2" element={<Project2 />} />
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
