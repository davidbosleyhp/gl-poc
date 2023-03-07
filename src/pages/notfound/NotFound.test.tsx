import React from 'react'
import { render, screen } from '@testing-library/react'
import { Grommet } from 'grommet'
import { hpe } from 'grommet-theme-hpe'
import NotFound from 'pages/notfound/NotFound'
import { BrowserRouter as Router } from 'react-router-dom'
// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('NotFound', () => {
    test('Not Found page: Test not found page div exists', () => {
        render(
            <Grommet theme={hpe}>
                <Router>
                    <NotFound />
                </Router>
            </Grommet>
        )
        const divElement = screen.getByText('Page not found!')
        expect(divElement).toBeInTheDocument()
    })

    test('Not Found page: Test contact admin message exists', () => {
        render(
            <Grommet theme={hpe}>
                <Router>
                    <NotFound />
                </Router>
            </Grommet>
        )
        const paragraphElement = screen.getByText(
            'This page does not exist. Please contact administrator.'
        )
        expect(paragraphElement).toBeInTheDocument()
    })

    test('Not Found page: Test home page link exists', () => {
        render(
            <Grommet theme={hpe}>
                <Router>
                    <NotFound />
                </Router>
            </Grommet>
        )
        const paragraphElement = screen.getByText('Homepage')
        expect(paragraphElement).toBeInTheDocument()
    })
})
