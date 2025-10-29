import { useState, useEffect } from 'react'

export function useTimer(active = true) {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (!active) return
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(interval)
  }, [active])

  const resetTimer = () => setSeconds(0)

  const formatTime = () => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  return { seconds, formatTime, resetTimer }
}
