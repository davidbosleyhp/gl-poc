import React, { useState } from 'react'
import { Grommet, Footer, Main, Text } from 'grommet'
import { hpe } from 'grommet-theme-hpe'
import { Outlet } from 'react-router-dom'

//components
//pages
import SideBar from 'components/ui/SideBar'

export default function MainLayout() {
    const [dark] = useState(false)
    return (
        <Grommet className="profile-layout" theme={hpe} full themeMode={dark ? 'dark' : 'light'}>
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
