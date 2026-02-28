import React, { useEffect } from 'react'
import { useGame } from '../hooks/useGame'
import { useTimer } from '../hooks/useTimer'
import GameBoard from '../components/GameBoard'
import GameOverDialog from '../components/GameOverDialog'
import { useResultsStore } from '../stores/resultsStore'
import { useSettingsStore } from '../stores/settingsStore'
import { useAuthStore } from '../stores/authStore'

export default function GamePage() {
  const { settings } = useSettingsStore()
  const { currentUser } = useAuthStore()
  const addResult = useResultsStore((state) => state.addResult)
  const { cards, flipped, matched, moves, isFinished, flipCard, resetGame, playerTurn, scores } = useGame()
  const { formatTime, resetTimer } = useTimer(!isFinished)

  const handleRestart = () => {
    resetGame()
    resetTimer()
  }

  useEffect(() => {
    if (isFinished) {
      let player;
      if (settings.twoPlayers) {
        player = scores[1] === scores[2]
          ? 'Нічия'
          : scores[1] > scores[2]
          ? 'Гравець 1'
          : 'Гравець 2'
      } else {
        player = currentUser ? currentUser.username : 'Гравець'
      }

      addResult(player, moves, formatTime())
    }
  }, [isFinished, addResult, formatTime, moves, scores, settings.twoPlayers, currentUser])

  return (
    <section className="page game">
      <h2>Гра: знайди всі пари</h2>
      <p>Ходи: {moves} | Час: {formatTime()}</p>

      {settings.twoPlayers && (
        <p>
          🧍‍♂️ Хід гравця {playerTurn} | 
          🎯 Рахунок: {scores[1]} - {scores[2]}
        </p>
      )}

      <GameBoard cards={cards} flipped={flipped} matched={matched} onFlip={flipCard} />

      <GameOverDialog
        isOpen={isFinished}
        moves={moves}
        scores={scores}
        onRestart={handleRestart}
        isTwoPlayers={settings.twoPlayers}
        currentUser={currentUser}
      />
    </section>
  )
}
