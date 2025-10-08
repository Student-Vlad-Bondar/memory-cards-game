import React from 'react'
import Button from './Button'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1>🎴 Memory Cards</h1>
        <nav className="nav">
          {/* Плейсхолдери для майбутньої навігації */}
          <Button size="sm">Старт</Button>
          <Button size="sm">Гра</Button>
          <Button size="sm">Результати</Button>
        </nav>
      </div>
    </header>
  )
}