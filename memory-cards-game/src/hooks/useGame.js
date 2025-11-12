import { useState, useEffect, useCallback } from 'react'
import { useSettingsStore } from '../stores/settingsStore'

const CARD_COUNTS = {
    easy: 8,   // 4x2
    medium: 16, // 4x4
    hard: 24   // 6x4
  }

const EMOJI_LABELS = ['🍎', '🍌', '🍒', '🍇', '🍓', '🥝', '🍍', '🍉', '🥥', '🍑', '🥭', '🍋']

const generateCards = (count) => {
  const pairs = count / 2
  const neededLabels = EMOJI_LABELS.slice(0, pairs)
  const duplicated = [...neededLabels, ...neededLabels]
  
  return duplicated
    .sort(() => Math.random() - 0.5)
    .map((label, i) => ({ 
        id: i, // id та uid можуть бути однаковими
        label, 
        uid: i 
    }))
}

export function useGame() {
  const { settings } = useSettingsStore()
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [playerTurn, setPlayerTurn] = useState(1)
  const [scores, setScores] = useState({ 1: 0, 2: 0 })

  const initializeGame = useCallback(() => {
    const cardCount = CARD_COUNTS[settings.difficulty] || 16
    const newCards = generateCards(cardCount)
    setCards(newCards)
    
    setFlipped([])
    setMatched([])
    setMoves(0)
    setIsFinished(false)
    setScores({ 1: 0, 2: 0 })
    setPlayerTurn(1)
  }, [settings.difficulty])

  useEffect(() => {
    initializeGame()
  }, [initializeGame])

  const flipCard = (uid) => {
    if (flipped.includes(uid) || matched.includes(uid)) return
    if (flipped.length === 2) return

    setFlipped((prev) => [...prev, uid])
  }

  useEffect(() => {
    if (flipped.length === 2 && cards.length > 0) {
      setMoves((m) => m + 1)
      const [first, second] = flipped.map((i) => cards[i])

      if (first.label === second.label) {
        setMatched((prev) => [...prev, flipped[0], flipped[1]])
        if (settings.twoPlayers)
          setScores((s) => ({ ...s, [playerTurn]: s[playerTurn] + 1 }))
      } else if (settings.twoPlayers) {
        setTimeout(() => setPlayerTurn((t) => (t === 1 ? 2 : 1)), settings.speed)
      }

      const timer = setTimeout(() => setFlipped([]), settings.speed)
      return () => clearTimeout(timer)
    }
  }, [flipped, cards, settings, playerTurn, setScores])

  useEffect(() => {
    if (cards.length && matched.length === cards.length) {
      setIsFinished(true)
    }
  }, [matched, cards])

  const resetGame = () => {
    initializeGame()
  }

  return { cards, flipped, matched, moves, isFinished, flipCard, resetGame, playerTurn, scores }
}
