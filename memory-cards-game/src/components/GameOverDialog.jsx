import React from 'react'
import ReactDOM from 'react-dom'

export default function GameOverDialog({ isOpen, moves, scores, onRestart, isTwoPlayers, currentUser }) {
    if (!isOpen) return null

    const winner = isTwoPlayers
        ? scores[1] === scores[2]
            ? 'Нічия 🤝'
            : scores[1] > scores[2]
            ? 'Гравець 1 переміг 🥇'
            : 'Гравець 2 переміг 🥈'
        : currentUser
        ? `${currentUser.username} переміг! 🎉`
        : 'Ви перемогли! 🎉'

    return ReactDOM.createPortal(
        <div className="overlay">
            <div className="dialog">
                <h2>🎉 Гру завершено!</h2>
                <p>Ходи: {moves}</p>
                <p>{winner}</p>
                <button onClick={onRestart}>🔁 Почати заново</button>
            </div>
        </div>,
        document.body
    )
}
