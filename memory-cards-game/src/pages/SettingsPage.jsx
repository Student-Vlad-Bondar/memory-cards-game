import React from 'react'
import { useSettingsContext } from '../contexts/SettingsContext'
import { useNavigate } from 'react-router-dom'
import SettingsForm from '../components/SettingsForm'
import Button from '../components/Button'

export default function SettingsPage() {
    const navigate = useNavigate()
    const { settings, setSettings } = useSettingsContext()

    return (
        <section className="page settings">
            <div className="form-container">
                <SettingsForm
                    defaultValues={settings}
                    onSubmit={(data) => {
                    setSettings(data)
                    alert('✅ Налаштування збережено!')
                    navigate('/')
                    }} 
                />
                <Button onClick={() => navigate(-1)} style={{marginTop: '1rem'}}>⬅ Назад</Button>
            </div>
        </section>
    )
}
