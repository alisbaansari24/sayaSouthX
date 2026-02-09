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
import Amenities from './components/Amenities'
import Image2 from './components/Image2'
import Specifications from './components/Specifications'
import MasterPlan from './components/MasterPlan'
import Gallery from './components/Gallery'
import Faqs from './components/Faqs'
import Location from './components/Location'
import DownloadBrochure from './components/DownloadBrochure'
import RequestCallBack from './components/RequestCallBack'
import Footer from './components/Footer'

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
      <Amenities />
      <Image2 />
      <Specifications />
      <MasterPlan />
      <Gallery />
      <Faqs />
      <Location />
      <DownloadBrochure />
      <RequestCallBack />
      <Footer />
    </div>
  )
}

export default App
