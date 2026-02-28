import React from 'react'
import { useCookieStore } from '../stores/cookieStore'
import Button from './Button'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const { hasInteracted, acceptAll, declineNonEssential } = useCookieStore()

  if (hasInteracted) return null

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h3>🍪 Налаштування конфіденційності</h3>
        <p>
          Ми використовуємо файли cookie для покращення вашого досвіду:
        </p>
        <ul style={{fontSize: '0.85rem', textAlign: 'left', margin: '0.5rem 0'}}>
            <li><strong>Необхідні:</strong> Вхід у систему та збереження ваших налаштувань складності.</li>
            <li><strong>Статистичні:</strong> Збереження історії ігор у таблицю рекордів.</li>
        </ul>
      </div>
      <div className={styles.actions}>
        <Button onClick={declineNonEssential} style={{background: '#666', color: 'white'}}>
          Тільки необхідні
        </Button>
        <Button onClick={acceptAll}>
          Дозволити всі
        </Button>
      </div>
    </div>
  )
}