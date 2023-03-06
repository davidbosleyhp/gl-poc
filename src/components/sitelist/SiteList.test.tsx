import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import SiteList from 'components/sitelist/SiteList'

// Dummy test - fill in as component becomes real.
// // will need to mock the api call
// describe('SiteList', () => {
//     test('Test displays of site list', () => {
//         render(<SiteList />)
//         const linkElement = screen.getByText(/Loading/i)
//         expect(linkElement).toBeInTheDocument()
//     })
// })

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: jest.fn(),
    useState: jest.fn(),
}))

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('SiteList', () => {
    // const setState = jest.fn()
    // const useStateSpy = jest.spyOn(React, 'useState')
    // useStateSpy.mockImplementation(() => [[], setState])

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('SiteList:  Test div with class attribute site-lists exist', async () => {
        render(<SiteList />)

        const divElement = await waitFor(() => document.querySelector('.site-lists'))
        expect(divElement).toBeInTheDocument()
        //expect(divElement).toHaveClass('site-lists')
    })

    test('SiteList:  Test that site TestSite2 is displayed', async () => {
        render(<SiteList />)

        const linkElement = await waitFor(() => screen.getByText('TestSite2'))
        expect(linkElement).toBeInTheDocument()
        //expect(linkElement).toHaveAttribute("href", "")
    })

    test('SiteList:  Test that site TestSite3 is displayed', async () => {
        render(<SiteList />)
        const linkElement = await waitFor(() => screen.getByText('TestSite3'))
        expect(linkElement).toBeInTheDocument()
        //expect(linkElement).toHaveAttribute("href", "")
    })
})
