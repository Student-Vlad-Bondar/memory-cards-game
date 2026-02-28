import React from 'react'

/**
 * Компонент ігрової картки з анімацією перевороту.
 * * @component
 * @param {Object} props - Пропси компонента.
 * @param {string} props.label - Емодзі або символ, що відображається на звороті.
 * @param {boolean} props.isFlipped - Чи перевернута картка обличчям до гравця.
 * @param {boolean} props.isMatched - Чи знайдена пара для цієї картки (залишається відкритою).
 * @param {function} props.onClick - Обробник події кліку (спрацьовує тільки якщо картка закрита).
 */
export default function Card({ label, isFlipped, isMatched, onClick }) {
  const handleClick = () => {
    if (!isFlipped && !isMatched) {
      onClick()
    }
  }

  return (
    <div
      className={`card ${isFlipped || isMatched ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">{label}</div>
      </div>
    </div>
  )
}
