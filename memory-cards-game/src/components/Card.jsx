import React from 'react'

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
