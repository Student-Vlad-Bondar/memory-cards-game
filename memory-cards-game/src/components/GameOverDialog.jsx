import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

/**
 * Модальне вікно завершення гри (використовує React Portal).
 * * @component
 * @param {Object} props - Пропси компонента.
 * @param {boolean} props.isOpen - Чи відображати діалог.
 * @param {number} props.moves - Загальна кількість зроблених ходів.
 * @param {Object} props.scores - Об'єкт з балами гравців (наприклад, {1: 5, 2: 3}).
 * @param {function} props.onRestart - Функція для перезапуску гри.
 * @param {boolean} props.isTwoPlayers - Прапор режиму гри для двох гравців.
 * @param {Object|null} props.currentUser - Об'єкт поточного авторизованого користувача.
 */
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
                <Button onClick={onRestart}>🔁 Почати заново</Button>
            </div>
        </div>,
        document.body
    )
}
