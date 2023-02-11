import { render, screen } from '@testing-library/react'
import React from 'react'
import SiteList from 'components/sitelist/SiteList'

describe('SiteList', () => {
    test('Displays sites', () => {
        render(<SiteList />)
        const linkElement = screen.getByText(/your Sites/i)
        expect(linkElement).toBeInTheDocument()
    })
})
