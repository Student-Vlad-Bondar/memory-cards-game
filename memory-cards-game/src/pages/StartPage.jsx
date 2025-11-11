import React from 'react'
import Button from '../components/Button'

export default function StartPage({ setPage }) {
  return (
    <section className="page start">
      <h2>Ласкаво просимо до Memory Cards!</h2>
      <p>Мета: знайдіть усі однакові пари карток.</p>
      <div className="start-actions">
        <Button onClick={() => setPage('game')}>Почати гру</Button>
        <Button onClick={() => setPage('settings')}>Налаштування</Button>
      </div>
    </section>
  )
}
