import { render, screen } from '@testing-library/react'
import React from 'react'
import SiteList from './SiteList'

describe('SiteList', () => {
    test('Displays sites', () => {
        render(<SiteList />)
        const linkElement = screen.getByText(/your Sites/i)
        expect(linkElement).toBeInTheDocument()
    })
})
