import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Routes } from 'react-router-dom'
import Header from './components/header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImageSection from './components/ImageSection'
import GrowthSegment from './components/GrowthSegment'
import Destination from './components/Destination'
import Slider from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Header />
      <Navbar />
      <Hero />
      <ImageSection />
      <GrowthSegment />
      <Destination />
      <Slider />
    </div>
  )
}

export default App
