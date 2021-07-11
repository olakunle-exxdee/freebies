import React, { useState } from 'react'

import './App.css'
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Maps from './components/Maps';
import Plans from './components/Plans';
import Testimonies from './components/Testimonies';

function App() {
 
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <Features/>
      <Plans/>
      <Maps/>
      <Testimonies/>
      <Footer/>
    </div>
    
  )
}

export default App
