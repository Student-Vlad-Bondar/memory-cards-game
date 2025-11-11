import React, { createContext, useContext, useState, useEffect } from 'react'
import { useUserContext } from './UserContext'

const defaultSettings = {
    difficulty: 'medium',
    speed: 800,
    twoPlayers: false,
}

const SettingsContext = createContext(null)

export function SettingsProvider({ children }) {
    const { currentUser } = useUserContext()

    const settingsKey = currentUser 
    ? `gameSettings_${currentUser.username}` 
    : 'gameSettings_guest'

    const [settings, setSettings] = useState(() => {
        const stored = localStorage.getItem(settingsKey)
        return stored ? JSON.parse(stored) : defaultSettings
    })

    useEffect(() => {
        const stored = localStorage.getItem(settingsKey)
        setSettings(stored ? JSON.parse(stored) : defaultSettings)
    }, [settingsKey])

    useEffect(() => {
        localStorage.setItem(settingsKey, JSON.stringify(settings))
    }, [settings, settingsKey])

    const value = { settings, setSettings }

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    )
}

export function useSettingsContext() {
    const context = useContext(SettingsContext)
    if (!context) {
        throw new Error('useSettingsContext must be used within a SettingsProvider')
    }
    return context
}