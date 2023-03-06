import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import SitePage from './SitesPage'
import { Grommet } from 'grommet'
import { hpe } from 'grommet-theme-hpe'

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: jest.fn(),
    useState: jest.fn(),
}))

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('SitesPage', () => {
    // const setState = jest.fn()
    // const useStateSpy = jest.spyOn(React, 'useState')
    // useStateSpy.mockImplementation(() => [[], setState])

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('SitePage: Test div exist for divSitePage', async () => {
        render(
            <Grommet theme={hpe}>
                <SitePage />
            </Grommet>
        )

        const divElement = await waitFor(() => screen.getByTestId('divSitePage'))
        expect(divElement).toBeInTheDocument()
        expect(divElement).toHaveTextContent('Your Sites')
    })

    test('SitePage:  Test div with class attribute site-lists exist', async () => {
        render(
            <Grommet theme={hpe}>
                <SitePage />
            </Grommet>
        )

        const divElement = await waitFor(() =>
            screen.getByTestId('divSitePage').querySelector('.site-lists')
        )
        expect(divElement).toBeInTheDocument()
        //expect(divElement).toHaveClass('site-lists')
    })

    test('SitePage:  Test that site TestSite2 is displayed', async () => {
        render(
            <Grommet theme={hpe}>
                <SitePage />
            </Grommet>
        )

        const linkElement = await waitFor(() => screen.getByText('TestSite2'))
        expect(linkElement).toBeInTheDocument()
        //expect(linkElement).toHaveAttribute("href", "")
    })

    test('SitePage:  Test that site TestSite3 is displayed', async () => {
        render(
            <Grommet theme={hpe}>
                <SitePage />
            </Grommet>
        )

        const linkElement = await waitFor(() => screen.getByText('TestSite3'))
        expect(linkElement).toBeInTheDocument()
        //expect(linkElement).toHaveAttribute("href", "")
    })
})
