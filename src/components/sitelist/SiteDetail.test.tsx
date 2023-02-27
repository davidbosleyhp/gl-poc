import { render, screen, within } from '@testing-library/react'
import React from 'react'
import { Site } from 'types/Site'
import SiteDetail from './SiteDetail'

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('SiteDetail', () => {
    const detail: Site = {
        id: 11,
        name: 'TestSite',
        geolocation: 'geo',
        altitude: 111,
        seismic_zone: 1111,
    }
    test('SiteDetail: Test div with class attribute site-detail exist', () => {
        render(<SiteDetail detail={detail} />)
        const divElement = screen.getByTestId('divSiteDetail')
        expect(divElement).toBeInTheDocument()
        expect(divElement).toHaveClass('site-detail')
    })
    test('SiteDetail: Test that site id is displayed', () => {
        render(<SiteDetail detail={detail} />)
        const divElementId = screen.getByText('Id')
        expect(divElementId).toBeInTheDocument()
        const spanElementId = screen.getByText('11')
        expect(spanElementId).toBeInTheDocument()
    })

    test('SiteDetail: Test that site name is displayed', () => {
        render(<SiteDetail detail={detail} />)
        const divElementId = screen.getByText('Name')
        expect(divElementId).toBeInTheDocument()
        const spanElementId = screen.getByText('TestSite')
        expect(spanElementId).toBeInTheDocument()
    })

    test('SiteDetail: Test that site geo location is displayed', () => {
        render(<SiteDetail detail={detail} />)
        const divElementId = screen.getByText('Geo Location')
        expect(divElementId).toBeInTheDocument()
        const spanElementId = screen.getByText('geo')
        expect(spanElementId).toBeInTheDocument()
    })

    test('SiteDetail: Test that site altitude is displayed', () => {
        render(<SiteDetail detail={detail} />)
        const divElementId = screen.getByText('Altitude')
        expect(divElementId).toBeInTheDocument()
        const spanElementId = screen.getByText('111')
        expect(spanElementId).toBeInTheDocument()
    })

    test('SiteDetail: Test that site seismic_zone is displayed', () => {
        render(<SiteDetail detail={detail} />)
        const divElementId = screen.getByText('Seismic Zone')
        expect(divElementId).toBeInTheDocument()
        const spanElementId = screen.getByText('1111')
        expect(spanElementId).toBeInTheDocument()
    })
})
