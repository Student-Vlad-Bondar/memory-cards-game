import { useState } from 'react'

export function useResults() {
  const [results, setResults] = useState([])

  const addResult = (player, moves, time) => {
    setResults((prev) => [
      ...prev,
      { id: prev.length + 1, player, moves, time },
    ])
  }

  const clearResults = () => setResults([])

  return { results, addResult, clearResults }
}
