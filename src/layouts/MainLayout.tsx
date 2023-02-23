import React, { useContext, useState } from 'react'
import { Grommet, Footer, Main, Text } from 'grommet'
import { hpe, backgrounds } from 'grommet-theme-hpe'
import { Outlet } from 'react-router-dom'

//components
import AppBar from 'components/ui/AppBar'
import Breadcrumbs from 'components/ui/Breadcrumbs'
import { UserSession } from 'types/UserSession'

//pages

// const userSession: UserSession = {
//     user: {
//         id: 1000,
//         name: 'Saroj Ekka',
//         thumbnail: '//s.gravatar.com/avatar/b226da5c619b18b44eb95c30be393953?s=80',
//     },
// }

//const userSession: UserSession | null = null

export default function MainLayout() {
    const [dark, setDark] = useState(false)
    return (
        <Grommet
            full
            className="main-layout"
            theme={hpe}
            themeMode={dark ? 'dark' : 'light'}
            background="datawave-white-4"
            // background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
        >
            <AppBar dark={dark} setDark={setDark} userSession={null} />
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
