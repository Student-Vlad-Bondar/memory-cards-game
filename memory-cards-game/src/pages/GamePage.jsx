import React from 'react'
import GameBoard from '../components/GameBoard'

export default function GamePage() {
  return (
    <section className="page game">
      <h2>Гра: знайди всі пари</h2>
      <p className="muted">(Тут буде ігрова панель. Наразі — плейсхолдер.)</p>
      <GameBoard />
    </section>
  )
}