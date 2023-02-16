import React, { useState } from 'react'
import { Footer, Grommet, Main, Page, Text } from 'grommet'
import AppBar from 'components/ui/AppBar'
import { hpe } from 'grommet-theme-hpe'
import { Switch } from 'grommet-icons'
import Home from 'pages/Home'
import About from 'pages/About'
import NotFound from 'pages/NotFound'
import { Route } from 'react-router-dom'
import SitesPage from 'pages/SitesPage'

const MainLayout = () => {
    const [dark, setDark] = useState(false)
    return (
        <Grommet className="root-layout" theme={hpe} full themeMode={dark ? 'dark' : 'light'}>
            <Page>
                <AppBar dark={dark} setDark={setDark} />
                <Switch>
                    <Route path="/" action={Home} />
                    <Route path={`sites`} action={SitesPage} />
                    <Route path={`about`} action={About} />
                    <Route path={`*`} action={NotFound} />
                </Switch>

                <Main pad="small">I am Main! Main is a good place to place your content.</Main>
                <Footer background="light-4" justify="center" pad="small">
                    <Text textAlign="center" size="small">
                        © 2023 Copyright Grommet
                    </Text>
                </Footer>
            </Page>
        </Grommet>
    )
}

export default MainLayout
