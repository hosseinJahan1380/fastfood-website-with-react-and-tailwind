import React from 'react'
import Navbar from './components/Navbar'
import Food from './components/Food'
import { Hero } from './components/Hero'
import './App.css'
import HeadLineCards from './components/HeadLineCards'

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <HeadLineCards/>
      <Food/>
    </>
  )
}

export default App
