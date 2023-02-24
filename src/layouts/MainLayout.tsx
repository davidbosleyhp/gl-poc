import React, { useState } from 'react'
import { Grommet, Footer, Main, Text } from 'grommet'
import { hpe } from 'grommet-theme-hpe'
import { Outlet } from 'react-router-dom'

//components
import AppBar from 'components/ui/AppBar'
import Breadcrumbs from 'components/ui/Breadcrumbs'

const MainLayout = () => {
    const [dark, setDark] = useState(false)
    return (
        <Grommet
            full
            className="main-layout"
            theme={hpe}
            themeMode={dark ? 'dark' : 'light'}
            background="datawave-multi-1"
        >
            <AppBar dark={dark} setDark={setDark} />
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
