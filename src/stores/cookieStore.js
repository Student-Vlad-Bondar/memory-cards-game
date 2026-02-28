import { create } from 'zustand'
import Cookies from 'js-cookie'

const COOKIE_NAME = 'memory_game_consent_status'

export const useCookieStore = create((set) => ({
  hasInteracted: !!Cookies.get(COOKIE_NAME), 
  
  consent: {
    essential: true,
    statistics: Cookies.get(COOKIE_NAME) === 'accepted', 
  },

  acceptAll: () => {
    Cookies.set(COOKIE_NAME, 'accepted', { expires: 365, sameSite: 'Strict' })

    set({ 
      hasInteracted: true, 
      consent: { essential: true, statistics: true } 
    })
  },

  declineNonEssential: () => {
    Cookies.set(COOKIE_NAME, 'declined', { expires: 365, sameSite: 'Strict' })

    set({ 
      hasInteracted: true, 
      consent: { essential: true, statistics: false } 
    })
  },
  
  resetConsent: () => {
    Cookies.remove(COOKIE_NAME)
    set({ hasInteracted: false, consent: { essential: true, statistics: false } })
  }
}))