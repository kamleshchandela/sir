import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Nav from "./components/Nav.jsx"
import About from './pages/About.jsx'
import Career from './pages/Carrer.jsx'
import Contact from './pages/Contact.jsx'
import Support from './pages/Support.jsx'
import NotFound from './pages/NotFound.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import AudioPlayer from './components/AudioPlayer.jsx'

export default function App() {
  return (
    <>
      <ProgressBar />
      <ScrollToTop />
      <AudioPlayer />
      <Nav/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/carrer' element= {<Career/>}/>
        <Route path='/support' element= {<Support/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='*' element= {<NotFound/>}/>
      </Routes>
    </>
  )
}