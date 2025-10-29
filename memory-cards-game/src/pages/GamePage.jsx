import React from 'react'
import { useGame } from '../hooks/useGame'
import { useTimer } from '../hooks/useTimer'
import GameBoard from '../components/GameBoard'

export default function GamePage() {
  const { cards, flipped, matched, moves, isFinished, flipCard, resetGame } = useGame()
  const { formatTime, resetTimer } = useTimer(!isFinished)

  return (
    <section className="page game">
      <h2>Гра: знайди всі пари</h2>
      <p>Ходи: {moves} | Час: {formatTime()}</p>
      <GameBoard cards={cards} flipped={flipped} matched={matched} onFlip={flipCard} />

      {isFinished && (
        <div className="game-finished">
          <p>🎉 Гру завершено! Ви зробили {moves} ходів за {formatTime()}.</p>
          <button onClick={() => { resetGame(); resetTimer(); }}>Почати заново</button>
        </div>
      )}
    </section>
  )
}
