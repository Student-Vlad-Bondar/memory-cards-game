import React from 'react'
import Card from './Card'

/**
 * Контейнер ігрового поля, що відображає сітку карток.
 * * @component
 * @param {Object} props - Пропси компонента.
 * @param {Array<{uid: number|string, label: string}>} [props.cards=[]] - Масив об'єктів з даними карток.
 * @param {number[]} [props.flipped=[]] - Масив індексів карток, які зараз перевернуті.
 * @param {number[]} [props.matched=[]] - Масив індексів карток, для яких знайдено пару.
 * @param {function} props.onFlip - Колбек-функція, що викликається при спробі перевернути картку.
 */
export default function GameBoard({ cards = [], flipped = [], matched = [], onFlip}) {
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
