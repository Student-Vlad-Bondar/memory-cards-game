import React, { createContext, useContext } from 'react'

const UserContext = createContext(null)

export function useUserContext() {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider (App.jsx)')
    }
    return context
}

export default UserContext