import React, { useState } from 'react'
import { Grommet, Footer, Main, Text, grommet } from 'grommet'
//import { hpe } from 'grommet-theme-hpe'
import { Outlet } from 'react-router-dom'

//components
//pages
import SideBar from 'components/ui/SideBar'
import { LoggedInUser } from 'types/LoggedInUser'
import AppBar from 'components/ui/AppBar'

export default function MainLayout() {
    const [dark, setDark] = useState(false)
    const [user, setUser] = useState<LoggedInUser | null>(null)

    return (
        <Grommet
            className="profile-layout"
            theme={grommet}
            full
            themeMode={dark ? 'dark' : 'light'}
            background="datawave-multi-1"
        >
            <AppBar dark={dark} setDark={setDark} user={user} setUser={setUser} />
            <SideBar />
            <Main>
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
