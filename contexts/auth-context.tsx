"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  chatbots?: {
    chatbot1: any[]
    chatbot2: any[]
    chatbot3: any[]
  }
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const BACKEND_URL = "http://localhost:4000"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing auth on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    const token = localStorage.getItem("token")

    if (savedUser && token) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Error parsing saved user:", error)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
      }
    }
    setIsLoading(false)
  }, [])

  const register = async (name: string, email: string, password: string) => {
    try {
      console.log("🚀 Starting registration...")

      const response = await fetch(`${BACKEND_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()
      console.log("📄 Registration response:", data)

      if (response.ok && data.user && data.token) {
        // Extract user data from your exact response format
        const user: User = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
        }

        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", data.token)

        return { success: true, message: data.message || "Registration successful!" }
      } else {
        return { success: false, message: data.message || "Registration failed" }
      }
    } catch (error) {
      console.error("Registration error:", error)
      return { success: false, message: "Network error. Please check your connection." }
    }
  }

  const login = async (email: string, password: string) => {
    try {
      console.log("🚀 Starting login...")

      const response = await fetch(`${BACKEND_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      console.log("📄 Login response:", data)

      if (response.ok && data.user && data.token) {
        // Extract user data from your exact response format
        const user: User = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          ...(data.user.chatbots && { chatbots: data.user.chatbots }),
        }

        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", data.token)

        return { success: true, message: data.message || "Login successful!" }
      } else {
        return { success: false, message: data.message || "Login failed" }
      }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, message: "Network error. Please check your connection." }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    localStorage.removeItem("token")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
