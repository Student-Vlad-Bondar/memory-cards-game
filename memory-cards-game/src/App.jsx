import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import StartPage from './pages/StartPage'
import GamePage from './pages/GamePage'
import SettingsPage from './pages/SettingsPage'
import ResultsPage from './pages/ResultsPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import './styles/components.css'
import { SettingsProvider } from './contexts/SettingsContext'
import UserContext from './contexts/UserContext'

export default function App() {
  const [page, setPage] = useState('start')
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const loggedInUserString = localStorage.getItem('loggedInUser')
    if (loggedInUserString) {
      setCurrentUser(JSON.parse(loggedInUserString))
    }
  }, [])

  const handleLogin = (user) => {
    setCurrentUser(user)
    setPage('start')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('loggedInUser')
    setPage('start')
  }

  const renderPage = () => {
    switch (page) {
      case 'game':
        return <GamePage />
      case 'settings':
        return <SettingsPage onBack={() => setPage('start')} />
      case 'results':
        return <ResultsPage />
      case 'register':
        return <RegisterPage onBack={() => setPage('start')} />
      case 'login':
        return <LoginPage onLoginSuccess={handleLogin} onBack={() => setPage('start')} />
      default:
        return <StartPage setPage={setPage} />
    }
  }

  const userContextValue = {
    currentUser,
    onLogout: handleLogout
  }

  return (
    <UserContext.Provider value={userContextValue}>
      <SettingsProvider>
        <div className="app-root">
          <Header setPage={setPage}/>
          <main className="main">{renderPage()}</main>
          <Footer />
        </div>
      </SettingsProvider>
    </UserContext.Provider>
  )
}
