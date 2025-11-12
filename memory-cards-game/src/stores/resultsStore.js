import { create } from 'zustand'
import { useAuthStore } from './authStore'

const getResultsKey = () => {
  const user = useAuthStore.getState().currentUser
  return user ? `gameResults_${user.username}` : 'gameResults_guest'
}

const loadResults = () => {
  const key = getResultsKey()
  const stored = localStorage.getItem(key)
  return stored ? JSON.parse(stored) : []
}

export const useResultsStore = create((set, get) => ({
  // --- State ---
  results: [],

  // --- Actions ---
  addResult: (player, moves, time) => {
    const newResult = { id: Date.now(), player, moves, time }
    const key = getResultsKey()
    const newResults = [...get().results, newResult]

    localStorage.setItem(key, JSON.stringify(newResults))
    set({ results: newResults })
  },

  clearResults: () => {
    const key = getResultsKey()
    localStorage.removeItem(key)
    set({ results: [] })
  },

  loadUserResults: () => {
    set({ results: loadResults() })
  },
}))
