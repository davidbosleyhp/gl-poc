import React, { useState } from 'react'
import { Grommet, Footer, Main, Text, grommet } from 'grommet'
import { hpe, backgrounds } from 'grommet-theme-hpe'
import { Outlet } from 'react-router-dom'

//components
import AppBar from 'components/ui/AppBar'
import Breadcrumbs from 'components/ui/Breadcrumbs'
import { LoggedInUser } from 'types/LoggedInUser'
//import { LoggedInUser } from 'types/LoggedInUser'

//pages
export default function MainLayout() {
    const [dark, setDark] = useState(false)
    const [user, setUser] = useState<LoggedInUser | null>(null)
    console.log(backgrounds)

    return (
        <Grommet
            full
            className="main-layout"
            theme={hpe}
            themeMode={dark ? 'dark' : 'light'}
            background="datawave-multi-1"
        >
            <AppBar dark={dark} setDark={setDark} user={user} setUser={setUser} />
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
