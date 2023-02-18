import ErrorBoundary from 'components/error-boundary'
import React, { useState } from 'react'
import { Footer, Grommet, Text } from 'grommet'
import { hpe } from 'grommet-theme-hpe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppBar from 'components/ui/AppBar'
import Home from 'pages/Home'
import About from 'pages/About'
import NotFound from 'pages/NotFound'
import SitesPage from 'pages/SitesPage'
import Breadcrumbs from 'components/ui/breadcrumbs'

function App() {
    const [dark, setDark] = useState(false)

    return (
        <ErrorBoundary>
            <Grommet className="root-layout" theme={hpe} full themeMode={dark ? 'dark' : 'light'}>
                <Router>
                    <AppBar dark={dark} setDark={setDark} />
                    <Breadcrumbs />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/sites" element={<SitesPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path={`*`} element={<NotFound />} />
                    </Routes>
                    <Footer background="light-4" justify="center" pad="small">
                        <Text textAlign="center" size="small">
                            © 2023 Copyright Hewlett Packard Enterprise
                        </Text>
                    </Footer>
                </Router>
            </Grommet>
        </ErrorBoundary>
    )
}

export default App

export function divide(a: number, b: number): number {
    // watch for divide by zero
    if (b === 0) {
        throw new Error("You can't divide by zero.")
    }

    return a / b
}

export function add(a: number, b: number): number {
    return a + b
}
