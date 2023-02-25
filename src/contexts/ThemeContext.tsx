import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

interface IThemeContext {
    darkMode: boolean
    toggleDark?: () => void
}

const defaultState = {
    darkMode: true,
}

export const ThemeContext = createContext<IThemeContext>(defaultState)

type ThemeProviderProps = {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [darkMode, setDarkMode] = useState(defaultState.darkMode)

    const toggleDark = useCallback(() => {
        setDarkMode(!darkMode)
    }, [darkMode])

    const memoValue = useMemo(
        () => ({
            darkMode,
            toggleDark,
        }),
        [darkMode, toggleDark]
    )

    return <ThemeContext.Provider value={memoValue}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext)
