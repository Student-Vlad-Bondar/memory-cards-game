import { create } from 'zustand'
import Cookies from 'js-cookie'

const getInitialUser = () => {
  // Тепер читаємо з кукі 'session_user'
  const storedUser = Cookies.get('session_user')
  return storedUser ? JSON.parse(storedUser) : null
}

export const useAuthStore = create((set) => ({
  currentUser: getInitialUser(),

  login: (user) => {
    // Зберігаємо в кукі на 7 днів
    Cookies.set('session_user', JSON.stringify(user), { expires: 7, sameSite: 'Strict' })
    set({ currentUser: user })
  },

  logout: () => {
    // Видаляємо кукі
    Cookies.remove('session_user')
    set({ currentUser: null })
  },
}))