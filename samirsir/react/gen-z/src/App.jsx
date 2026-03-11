import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Nav from "./components/Nav.jsx"
import Image from './components/Image.jsx'
import Partnar from './components/partner.jsx'
import Serves from './components/serves.jsx'

export default function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element= {[<Home/> , <Nav/> , <Image /> , <Partnar /> , <Serves />]}/>
      </Routes>
    </>
  )
}