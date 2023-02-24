import { render, screen } from '@testing-library/react'
import React from 'react'
import SiteList from 'components/sitelist/SiteList'

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('SiteList', () => {
    test('Displays sites', () => {
        render(<SiteList />)
        const linkElement = screen.getByText(/Loading/i)
        expect(linkElement).toBeInTheDocument()
    })
})
