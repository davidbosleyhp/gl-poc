import React from 'react'
import { render, screen } from '@testing-library/react'
import AccessDenied from 'pages/accessdenied/AccessDenied'
import { Grommet } from 'grommet'
import { hpe } from 'grommet-theme-hpe'
import { BrowserRouter as Router } from 'react-router-dom'

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('AccessDenied', () => {
    test('AccessDenied page: Test Access Denied page div exists', () => {
        render(
            <Grommet theme={hpe}>
                <Router>
                    <AccessDenied />
                </Router>
            </Grommet>
        )
        const divElement = screen.getByText('Acccess Denied')
        expect(divElement).toBeInTheDocument()
    })

    test('AccessDenied page: Test Access Denied page has message', () => {
        render(
            <Grommet theme={hpe}>
                <Router>
                    <AccessDenied />
                </Router>
            </Grommet>
        )
        const paragraphElement = screen.getByText('This page access is denied. Please login first.')
        expect(paragraphElement).toBeInTheDocument()
    })

    test('AccessDenied page: Test Access Denied page has home page link', () => {
        render(
            <Grommet theme={hpe}>
                <Router>
                    <AccessDenied />
                </Router>
            </Grommet>
        )
        const paragraphElement = screen.getByText('Homepage')
        expect(paragraphElement).toBeInTheDocument()
    })
})
