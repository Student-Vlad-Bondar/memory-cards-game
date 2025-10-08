import React from 'react'
import { sampleResults } from '../data/placeholderData'
import Button from '../components/Button'

export default function ResultsPage() {
  return (
    <section className="page results">
      <h2>Результати останньої гри</h2>

      <div className="results-summary">
        <p className="muted">Тут показано приклад таблиці результатів. У наступних лабах її наповнить стейт/сервер.</p>
        <table className="results-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Гравець</th>
              <th>Ходи</th>
              <th>Час</th>
            </tr>
          </thead>
          <tbody>
            {sampleResults.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.player}</td>
                <td>{r.moves}</td>
                <td>{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="results-actions">
        <Button>Почати нову гру</Button>
        <Button>Повернутись на старт</Button>
      </div>
    </section>
  )
}