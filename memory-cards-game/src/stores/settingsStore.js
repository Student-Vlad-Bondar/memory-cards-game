import { create } from 'zustand'
import Cookies from 'js-cookie'
import { useAuthStore } from './authStore'

const defaultSettings = {
  difficulty: 'medium',
  speed: 800,
  twoPlayers: false,
}

const getSettingsKey = () => {
  const user = useAuthStore.getState().currentUser
  return user ? `settings_${user.username}` : 'settings_guest'
}

export const useSettingsStore = create((set) => ({
  settings: defaultSettings,

  setSettings: (newSettings) => {
    const key = getSettingsKey()
    // Зберігаємо налаштування в кукі на 30 днів
    Cookies.set(key, JSON.stringify(newSettings), { expires: 30 })
    set({ settings: newSettings })
  },

  loadUserSettings: () => {
    const key = getSettingsKey()
    const stored = Cookies.get(key)
    set({ settings: stored ? JSON.parse(stored) : defaultSettings })
  },
}))