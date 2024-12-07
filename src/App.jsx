import { useState } from 'react'
import './css/App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Header />
        <MainContent />
        <SocialMedia />
        <Footer />
      </div>
    </>
  )
}

export default App
