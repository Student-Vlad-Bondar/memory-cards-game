import React from 'react'

export default function Card({ index, label }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">{label || `Картка ${index + 1}`}</div>
      </div>
    </div>
  )
}