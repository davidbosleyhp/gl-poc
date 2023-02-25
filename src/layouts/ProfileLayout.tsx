import React from 'react'
import { Grommet, Footer, Main, Text, grommet } from 'grommet'
//import { hpe } from 'grommet-theme-hpe'
import { Outlet } from 'react-router-dom'

//components
//pages
import SideBar from 'components/ui/SideBar'
import AppBar from 'components/ui/AppBar'

export default function MainLayout() {
    //const [dark, setDark] = useState(false)

    return (
        <Grommet
            className="profile-layout"
            theme={grommet}
            full
            //themeMode={dark ? 'dark' : 'light'}
            background="datawave-multi-1"
        >
            <AppBar />
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
