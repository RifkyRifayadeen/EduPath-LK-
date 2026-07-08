import { createContext, useContext, useState } from 'react'
import { mockUser } from './mockData'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function login(email, _password) {
    // Mock login: any credentials succeed and return the mock user.
    setUser({ ...mockUser, email })
  }

  function register(fullName, email, _password) {
    setUser({ ...mockUser, fullName, email })
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
