import React from 'react'
import Card from './Card'
import { placeholderCards } from '../data/placeholderData'

export default function GameBoard() {
  return (
    <div className="game-board" aria-label="game-board">
      {placeholderCards.map((c) => (
        <Card key={c.id} index={c.id - 1} label={c.label} />
      ))}
    </div>
  )
}
