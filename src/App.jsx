import React, { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import BonusSlider from './components/BonusSlider'
import GameCategories from './components/GameCategories'
import TopGames from './components/TopGames'
import NewGames from './components/NewGames'
import AnonymousContent from './components/AnonymousContent'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      {loading && <LoadingScreen />}
      <Sidebar />
      <TopBar />
      <main className="main-content">
        <Hero />
        <BonusSlider />
        <GameCategories />
        <TopGames />
        <NewGames />
        <Footer />
      </main>
    </div>
  )
}

export default App


