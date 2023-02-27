import { render, screen } from '@testing-library/react'
import React from 'react'
import { Site } from 'types/Site'
import SiteDetail from './SiteDetail'

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('SiteDetail', () => {
    const detail: Site = {
        id: 1,
        name: 'TestSite',
        geolocation: 'geo',
        altitude: 11,
        seismic_zone: 111,
    }
    test('Display site detail', () => {
        render(<SiteDetail detail={detail} />)
        const linkElement = screen.getByText('TestSite')
        expect(linkElement).toBeInTheDocument()
    })
})
