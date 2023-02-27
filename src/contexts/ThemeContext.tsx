import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

interface IThemeContext {
    darkMode: boolean
    toggleDark?: () => void
    showToggle: boolean
    setShowToggle?: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultState = {
    darkMode: true,
    showToggle: true,
}

export const ThemeContext = createContext<IThemeContext>(defaultState)

type ThemeProviderProps = {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [darkMode, setDarkMode] = useState(defaultState.darkMode)
    const [showToggle, setShowToggle] = useState(true)

    const toggleDark = useCallback(() => {
        setDarkMode(!darkMode)
    }, [darkMode])

    const memoValue = useMemo(
        () => ({
            darkMode,
            toggleDark,
            showToggle,
            setShowToggle,
        }),
        [darkMode, toggleDark, showToggle, setShowToggle]
    )

    return <ThemeContext.Provider value={memoValue}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext)
