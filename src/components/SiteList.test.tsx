import { render, screen } from '@testing-library/react'
import React from 'react'
import SiteList from './SiteList'

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('SiteList', () => {
    test('Displays sites', () => {
        render(<SiteList />)
        const linkElement = screen.getByText(/Your Sites/i)
        expect(linkElement).toBeInTheDocument()
    })
})
