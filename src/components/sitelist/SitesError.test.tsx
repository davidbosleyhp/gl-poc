import { render, screen } from '@testing-library/react'
import { Grommet } from 'grommet'
import { hpe } from 'grommet-theme-hpe'
import React from 'react'
import { BrowserRouter as Router, useRouteError } from 'react-router-dom'
import SitesError from './SitesError'

// 1- Mocking the hook using jest.fn
//const mockedUseRouteError = jest.fn()

// 2- Mock the library
jest.mock('react-router-dom', () => ({
    // 3- Import non-mocked library and use other functionalities and hooks
    ...jest.requireActual('react-router-dom'),

    // 4- Mock the required hook
    useRouteError: jest.fn(),
}))

beforeEach(() => {
    // eslint-disable-next-line prettier/prettier
    (useRouteError as jest.Mock).mockReturnValue({ message: 'testing for error message' })
})

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('SitesError', () => {
    test('SitesError: Test div with class attribute sites-error exist', () => {
        render(
            <Grommet theme={hpe}>
                <Router>
                    <SitesError />
                </Router>
            </Grommet>
        )
        const divElement = document.querySelector('.sites-error')
        expect(divElement).toBeInTheDocument()
    })
    test('SitesError: Test that site Error title is displayed', () => {
        render(
            <Grommet theme={hpe}>
                <Router>
                    <SitesError />
                </Router>
            </Grommet>
        )
        const divElementId = screen.getByText('Site Error')
        expect(divElementId).toBeInTheDocument()
    })

    test('SitesError: Test that site Error message is displayed', () => {
        render(
            <Grommet theme={hpe}>
                <Router>
                    <SitesError />
                </Router>
            </Grommet>
        )
        const divElementId = screen.getByText('testing for error message')
        expect(divElementId).toBeInTheDocument()
    })
    test('SitesError: Test that site Error has back to home link is displayed', () => {
        render(
            <Grommet theme={hpe}>
                <Router>
                    <SitesError />
                </Router>
            </Grommet>
        )
        const divElementId = screen.getByText('Back to Home')
        expect(divElementId).toBeInTheDocument()
    })
})
