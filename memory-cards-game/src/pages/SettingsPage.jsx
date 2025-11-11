import React from 'react'
import { useSettingsContext } from '../contexts/SettingsContext'
import SettingsForm from '../components/SettingsForm'

export default function SettingsPage({ onBack }) {
  const { settings, setSettings } = useSettingsContext()

  return (
    <section className="page settings">
      <SettingsForm
        defaultValues={settings}
        onSubmit={(data) => {
          setSettings(data)
          alert('✅ Налаштування збережено!')
          onBack?.()
        }} 
      />
      <button onClick={onBack}>⬅ Назад</button>
    </section>
  )
}
