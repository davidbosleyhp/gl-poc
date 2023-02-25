import { useThemeContext } from 'contexts/ThemeContext'
import { Box, Button } from 'grommet'
import { Moon, Sun } from 'grommet-icons'
import React from 'react'

const ToggleDarkMode = () => {
    const { darkMode, toggleDark } = useThemeContext()
    const handleOnClick = () => {
        if (toggleDark !== undefined) toggleDark()
    }
    return (
        <>
            <Button
                a11yTitle={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                icon={darkMode ? <Moon /> : <Sun />}
                onClick={() => handleOnClick()}
                tip={{
                    content: (
                        <Box pad="small" round="small" background={darkMode ? 'dark-1' : 'light-3'}>
                            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        </Box>
                    ),
                    plain: true,
                }}
            />
        </>
    )
}

export default ToggleDarkMode
