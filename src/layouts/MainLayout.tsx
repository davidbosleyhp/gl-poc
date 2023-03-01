import React from 'react'
import { Grommet, Footer, Main, Text } from 'grommet'
import { hpe } from 'grommet-theme-hpe'
import { Outlet } from 'react-router-dom'

//components
import AppBar from 'components/ui/AppBar'
import Breadcrumbs from 'components/ui/Breadcrumbs'
import { useThemeContext } from 'contexts/ThemeContext'

const MainLayout = () => {
    const { darkMode, setShowToggle } = useThemeContext()
    if (setShowToggle !== undefined) setShowToggle(true)

    return (
        <Grommet
            full
            className="main-layout"
            theme={hpe}
            themeMode={darkMode ? 'dark' : 'light'}
            background={darkMode ? 'datawave-multi-1' : 'datawave-white-1'}
        >
            <AppBar />
            <Main pad="small">
                <Breadcrumbs />
                <Outlet />
            </Main>
            <Footer background="light-4" justify="center" pad="small">
                <Text textAlign="center" size="small">
                    © 2023 Copyright Hewlett Packard Enterprise
                </Text>
            </Footer>
        </Grommet>
    )
}

export default MainLayout
