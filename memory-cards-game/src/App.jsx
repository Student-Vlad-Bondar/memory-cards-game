import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import StartPage from './pages/StartPage'
import GamePage from './pages/GamePage'
import ResultsPage from './pages/ResultsPage'
import './styles/components.css'


export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="main">
        <StartPage />
        <GamePage />
        <ResultsPage />
      </main>
      <Footer />
    </div>
  )
}