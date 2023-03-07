import React from 'react'
import { Grommet, Footer, Main, Text, Box } from 'grommet'
import { Outlet } from 'react-router-dom'
//import { grommet } from 'grommet-theme-hpe'
//components
//pages
import SideBar from 'components/ui/SideBar'
import AppBar from 'components/ui/AppBar'
import { useThemeContext } from 'contexts/ThemeContext'
import Breadcrumbs from 'components/ui/Breadcrumbs'

export default function ProfileLayout() {
    const { darkMode, setShowToggle } = useThemeContext()
    if (setShowToggle !== undefined) setShowToggle(false)
    return (
        <Grommet
            className="profile-layout"
            //theme={grommet}
            full
            themeMode={darkMode ? 'dark' : 'light'}
            background={darkMode ? 'datawave-multi-1' : 'datawave-white-1'}
        >
            <AppBar />
            <Box direction="row" fill="vertical">
                <SideBar />
                <Main pad="small">
                    <Breadcrumbs />
                    <Outlet />
                </Main>
            </Box>
            <Footer background="light-4" justify="center" pad="small">
                <Text textAlign="center" size="small">
                    © 2023 Copyright Hewlett Packard Enterprise
                </Text>
            </Footer>
        </Grommet>
    )
}
