import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import SiteDetailPage from './SiteDetailPage'
import Router from 'react-router'
import { Grommet } from 'grommet'
import { hpe } from 'grommet-theme-hpe'

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: jest.fn(),
    useState: jest.fn(),
}))

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('SiteDetailPage', () => {
    const setState = jest.fn()
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation(() => [undefined, setState])

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('SiteDetailPage: Test div exist for divSiteDetailPage', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
        render(
            <Grommet theme={hpe}>
                <SiteDetailPage />
            </Grommet>
        )

        const divElement = await waitFor(() => screen.getByTestId('divSiteDetailPage'))
        expect(divElement).toBeInTheDocument()
        expect(divElement).toHaveTextContent('Site Detail')
    })

    test('SiteDetailPage:  Test div with class attribute site-detail exist', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
        render(
            <Grommet theme={hpe}>
                <SiteDetailPage />
            </Grommet>
        )

        const divElement = await waitFor(() => screen.getByTestId('divSiteDetail'))
        expect(divElement).toBeInTheDocument()
        expect(divElement).toHaveClass('site-detail')
    })

    test('SiteDetailPage:  Test that site id is displayed', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
        render(
            <Grommet theme={hpe}>
                <SiteDetailPage />
            </Grommet>
        )

        const divElementId = await waitFor(() => screen.getByText('Id'))
        expect(divElementId).toBeInTheDocument()
        const spanElementId = await waitFor(() => screen.getByText('22'))
        expect(spanElementId).toBeInTheDocument()
    })

    test('SiteDetailPage:  Test that site name is displayed', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
        render(
            <Grommet theme={hpe}>
                <SiteDetailPage />
            </Grommet>
        )

        const divElementId = await waitFor(() => screen.getByText('Name'))
        expect(divElementId).toBeInTheDocument()
        const spanElementId = await waitFor(() => screen.getByText('TestSite2'))
        expect(spanElementId).toBeInTheDocument()
    })

    test('SiteDetailPage:  Test that geo location is displayed', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
        render(
            <Grommet theme={hpe}>
                <SiteDetailPage />
            </Grommet>
        )

        const divElementId = await waitFor(() => screen.getByText('Geo Location'))
        expect(divElementId).toBeInTheDocument()
        const spanElementId = await waitFor(() => screen.getByText('geo2'))
        expect(spanElementId).toBeInTheDocument()
    })

    test('SiteDetailPage:  Test that site altitude is displayed', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
        render(
            <Grommet theme={hpe}>
                <SiteDetailPage />
            </Grommet>
        )

        const divElementId = await waitFor(() => screen.getByText('Altitude'))
        expect(divElementId).toBeInTheDocument()
        const spanElementId = await waitFor(() => screen.getByText('222'))
        expect(spanElementId).toBeInTheDocument()
    })

    test('SiteDetailPage:  Test that seismic_zone is displayed', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
        render(
            <Grommet theme={hpe}>
                <SiteDetailPage />
            </Grommet>
        )

        const divElementId = await waitFor(() => screen.getByText('Seismic Zone'))
        expect(divElementId).toBeInTheDocument()
        const spanElementId = await waitFor(() => screen.getByText('2222'))
        expect(spanElementId).toBeInTheDocument()
    })
})
