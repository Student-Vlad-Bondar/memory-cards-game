import React from 'react'
import Card from './Card'

export default function GameBoard({ cards, flipped, matched, onFlip }) {
  return (
    <div className="game-board">
      {cards.map((c, i) => (
        <Card
          key={c.uid}
          label={c.label}
          isFlipped={flipped.includes(i)}
          isMatched={matched.includes(i)}
          onClick={() => onFlip(i)}
        />
      ))}
    </div>
  )
}
