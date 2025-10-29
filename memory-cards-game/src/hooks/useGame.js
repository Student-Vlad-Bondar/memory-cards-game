import { useState, useEffect } from 'react'
import { placeholderCards } from '../data/placeholderData'

export function useGame() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

    // ініціалізація: дублікат карт + рандомізація
  useEffect(() => {
    const duplicated = [...placeholderCards, ...placeholderCards]
    const shuffled = duplicated
      .sort(() => Math.random() - 0.5)
      .map((card, i) => ({ ...card, uid: i }))
    setCards(shuffled)
  }, [])

  const flipCard = (uid) => {
    if (flipped.includes(uid) || matched.includes(uid)) return
    if (flipped.length === 2) return

    setFlipped((prev) => [...prev, uid])
  }

  useEffect(() => {
    if (flipped.length === 2) {
      setMoves((m) => m + 1)
      const [first, second] = flipped.map((i) => cards[i])
      if (first.label === second.label) {
        setMatched((prev) => [...prev, flipped[0], flipped[1]])
      }
      const timer = setTimeout(() => setFlipped([]), 800)
      return () => clearTimeout(timer)
    }
  }, [flipped])

  // коли всі картки знайдено
  useEffect(() => {
    if (cards.length && matched.length === cards.length) {
      setIsFinished(true)
    }
  }, [matched, cards])

  const resetGame = () => {
    setFlipped([])
    setMatched([])
    setMoves(0)
    setIsFinished(false)
    const duplicated = [...placeholderCards, ...placeholderCards]
    const shuffled = duplicated
      .sort(() => Math.random() - 0.5)
      .map((card, i) => ({ ...card, uid: i }))
    setCards(shuffled)
  }

  return { cards, flipped, matched, moves, isFinished, flipCard, resetGame }
}
