import { createContext, useContext, useEffect, useState } from 'react'

const THEME_CLASS = 'theme-dark'
const STORAGE_KEY = 'portfolio-theme'

const ThemeContext = createContext(null)

function getRoot() {
  return typeof document !== 'undefined' ? document.documentElement : null
}

function getStoredTheme() {
  if (typeof localStorage === 'undefined') return 'light'
  return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light'
}

function applyTheme(theme) {
  const root = getRoot()
  if (!root) return
  if (theme === 'dark') {
    root.classList.add(THEME_CLASS)
  } else {
    root.classList.remove(THEME_CLASS)
  }
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch (_) {}
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => getStoredTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggle = () => {
    const root = getRoot()
    const isCurrentlyDark = root ? root.classList.contains(THEME_CLASS) : false
    const nextTheme = isCurrentlyDark ? 'light' : 'dark'
    applyTheme(nextTheme)
    setTheme(nextTheme)
  }

  const isDark = theme === 'dark'

  return (
    <ThemeContext.Provider value={{ isDark, theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
