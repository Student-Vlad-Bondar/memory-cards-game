import { create } from 'zustand'
//import { useSettingsStore } from './settingsStore'
//import { useResultsStore } from './resultsStore'

const getInitialUser = () => {
  const storedUser = localStorage.getItem('loggedInUser')
  return storedUser ? JSON.parse(storedUser) : null
};

export const useAuthStore = create((set) => ({
  // --- State ---
  currentUser: getInitialUser(),

  // --- Actions ---
  login: (user) => {
    localStorage.setItem('loggedInUser', JSON.stringify(user))
    set({ currentUser: user })

    //useSettingsStore.getState().loadUserSettings()
    //useResultsStore.getState().loadUserResults()
  },

  logout: () => {
    localStorage.removeItem('loggedInUser')
    set({ currentUser: null })

    //useSettingsStore.getState().loadUserSettings()
    //useResultsStore.getState().loadUserResults()
  },
}))