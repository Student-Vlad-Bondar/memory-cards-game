import React from 'react'
import Button from './Button'
import { useUserContext } from '../contexts/UserContext'

export default function Header({ setPage }) {
  const { currentUser, onLogout } = useUserContext()

  return (
    <header className="header">
      <div className="header-inner">
        <h1>🎴 Memory Cards</h1>
        <nav className="nav">
          <Button size="sm" onClick={() => setPage('start')}>Старт</Button>
          <Button size="sm" onClick={() => setPage('game')}>Гра</Button>
          <Button size="sm" onClick={() => setPage('settings')}>Налаштування</Button>
          <Button size="sm" onClick={() => setPage('results')}>Результати</Button>
          {currentUser ? (
            <>
              {/* Стан "Увійшов" */}
              <span style={{ alignSelf: 'center', margin: '0 0.5rem', color: 'white' }}>
                Вітаємо, {currentUser.username}!
              </span>
              <Button size="sm" onClick={onLogout}>Вийти</Button>
            </>
          ) : (
            <>
              {/* Стан "Гість" */}
              <Button size="sm" onClick={() => setPage('login')}>Вхід</Button>
              <Button size="sm" onClick={() => setPage('register')}>Реєстрація</Button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
