import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

/**
 * Головна навігаційна панель додатка.
 * * Відображає логотип, посилання на основні розділи гри та блок авторизації.
 * Стан кнопок (Вхід/Реєстрація або Профіль/Вийти) залежить від наявності `currentUser`.
 * * @component
 * @requires useAuthStore - для отримання даних користувача та функції виходу.
 * @requires useNavigate - для переходу між сторінками.
 * @returns {JSX.Element} Шапка сайту з адаптивною навігацією.
 */
export default function Header() {
  const { currentUser, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
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
