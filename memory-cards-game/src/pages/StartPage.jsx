import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function StartPage() {
  const navigate = useNavigate()

  return (
    <section className="page start">
      <h2>Ласкаво просимо до Memory Cards!</h2>
      <p>Мета: знайдіть усі однакові пари карток.</p>
      <div className="start-actions">
        <Button onClick={() => navigate('/game')}>Почати гру</Button>
        <Button onClick={() => navigate('/settings')}>Налаштування</Button>
      </div>
    </section>
  )
}
