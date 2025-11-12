import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import StartPage from './pages/StartPage'
import GamePage from './pages/GamePage'
import SettingsPage from './pages/SettingsPage'
import ResultsPage from './pages/ResultsPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import './styles/components.css'
import { SettingsProvider } from './contexts/SettingsContext'
import UserContext from './contexts/UserContext'

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const loggedInUserString = localStorage.getItem('loggedInUser')
    if (loggedInUserString) {
      setCurrentUser(JSON.parse(loggedInUserString))
    }
  }, [])

  const handleLogin = (user) => {
    setCurrentUser(user)
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('loggedInUser')
  }

  const userContextValue = {
    currentUser,
    onLogout: handleLogout
  }

  return (
    <UserContext.Provider value={userContextValue}>
      <SettingsProvider>
        <div className="app-root">
          <Header/>
          <main className="main">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage onLoginSuccess={handleLogin} />} />
              
              {/* 8. Динамічний роут, як вимагає лабораторна */}
              <Route path="/profile/:username" element={<ProfilePage />} />

              {/* 9. "Сторінка не знайдена" (опціонально, але корисно) */}
              <Route path="*" element={<h2>404: Сторінку не знайдено</h2>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SettingsProvider>
    </UserContext.Provider>
  )
}
