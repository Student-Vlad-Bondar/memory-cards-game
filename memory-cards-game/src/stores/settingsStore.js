import { create } from 'zustand'
import { useAuthStore } from './authStore'

const defaultSettings = {
  difficulty: 'medium',
  speed: 800,
  twoPlayers: false,
}

const getSettingsKey = () => {
  const user = useAuthStore.getState().currentUser;
  return user ? `gameSettings_${user.username}` : 'gameSettings_guest'
}

const loadSettings = () => {
  const key = getSettingsKey()
  const stored = localStorage.getItem(key)
  return stored ? JSON.parse(stored) : defaultSettings
}

export const useSettingsStore = create((set) => ({
  // --- State ---
  settings: defaultSettings,

  // --- Actions ---
  setSettings: (newSettings) => {
    const key = getSettingsKey();
    localStorage.setItem(key, JSON.stringify(newSettings))
    set({ settings: newSettings })
  },

  loadUserSettings: () => {
    set({ settings: loadSettings() })
  },
}))
