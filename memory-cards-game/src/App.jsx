import React, { useEffect } from 'react'
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
import { useAuthStore } from './stores/authStore'
import { useSettingsStore } from './stores/settingsStore'
import { useResultsStore } from './stores/resultsStore'

export default function App() {
  const currentUser = useAuthStore((state) => state.currentUser)
  const loadUserSettings = useSettingsStore((state) => state.loadUserSettings)
  const loadUserResults = useResultsStore((state) => state.loadUserResults)

  useEffect(() => {
    loadUserSettings()
    loadUserResults()
  }, [currentUser, loadUserSettings, loadUserResults])

  return (
        <div className="app-root">
          <Header/>
          <main className="main">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile/:username" element={<ProfilePage />} />
              <Route path="*" element={<h2>404: Сторінку не знайдено</h2>} />
            </Routes>
          </main>
          <Footer />
        </div>
  )
}
