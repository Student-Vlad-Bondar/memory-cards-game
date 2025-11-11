import React from 'react'
import Button from '../components/Button'
import { useResults } from '../hooks/useResults'

export default function ResultsPage() {
  const { results, clearResults } = useResults()

  return (
    <section className="page results">
      <h2>Результати останніх ігор</h2>

      {results.length === 0 ? (
        <p className="muted">Поки що немає результатів.</p>
      ) : (
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
            {results.map((r, i) => (
              <tr key={r.id}>
                <td>{i + 1}</td>
                <td>{r.player}</td>
                <td>{r.moves}</td>
                <td>{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="results-actions">
        <Button onClick={clearResults}>Очистити</Button>
      </div>
    </section>
  )
}
