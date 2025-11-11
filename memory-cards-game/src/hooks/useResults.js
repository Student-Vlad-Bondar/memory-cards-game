import { useState, useEffect, useCallback } from 'react'
import { useUserContext } from '../contexts/UserContext'

export function useResults() {
  const { currentUser } = useUserContext()

  const resultsKey = currentUser 
    ? `gameResults_${currentUser.username}` 
    : 'gameResults_guest'

  const [results, setResults] = useState(() => {
    const stored = localStorage.getItem(resultsKey)
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    const stored = localStorage.getItem(resultsKey)
    setResults(stored ? JSON.parse(stored) : [])
  }, [resultsKey])

  useEffect(() => {
    localStorage.setItem(resultsKey, JSON.stringify(results))
  }, [results, resultsKey])

  const addResult = useCallback((player, moves, time) => {
    setResults(prev => [...prev, { id: Date.now(), player, moves, time }])
  }, [])

  const clearResults = useCallback(() => setResults([]), [])

  return { results, addResult, clearResults }
}
