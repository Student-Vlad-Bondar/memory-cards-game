import React from 'react'
import Button from './Button'
import { useUserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const { currentUser, onLogout } = useUserContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-inner">
        <h1>🎴 Memory Cards</h1>
        <nav className="nav">
          <Button size="sm" onClick={() => navigate('/')}>Старт</Button>
          <Button size="sm" onClick={() => navigate('/game')}>Гра</Button>
          <Button size="sm" onClick={() => navigate('/settings')}>Налаштування</Button>
          <Button size="sm" onClick={() => navigate('/results')}>Результати</Button>
          {currentUser ? (
            <>
              {/* Стан "Увійшов" */}
              <span style={{ alignSelf: 'center', margin: '0 0.5rem', color: 'white' }}>
                Вітаємо, {currentUser.username}!
              </span>
              <Button size="sm" onClick={() => navigate(`/profile/${currentUser.username}`)}>Профіль</Button>
              <Button size="sm" onClick={handleLogout}>Вийти</Button>
            </>
          ) : (
            <>
              {/* Стан "Гість" */}
              <Button size="sm" onClick={() => navigate('/login')}>Вхід</Button>
              <Button size="sm" onClick={() => navigate('/register')}>Реєстрація</Button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
