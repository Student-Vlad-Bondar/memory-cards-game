import React from 'react'
import Button from '../components/Button'

export default function StartPage() {
  return (
    <section className="page start">
      <h2>Ласкаво просимо до Memory Cards!</h2>
      <p>Мета: знайдіть всі однакові пари карток.</p>
      <div className="start-actions">
        <Button>Почати гру</Button>
        <Button>Налаштування</Button>
      </div>
    </section>
  )
}