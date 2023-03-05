import React from 'react'
import { render, screen } from '@testing-library/react'
import About from 'pages/about/About'
import { Grommet } from 'grommet'
import { hpe } from 'grommet-theme-hpe'

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('About', () => {
    test('About page: Test about page div exists', () => {
        render(
            <Grommet theme={hpe}>
                <About />{' '}
            </Grommet>
        )
        const divElement = screen.getByText('About MySites')
        expect(divElement).toBeInTheDocument()
        const paragraphElement = screen.getByText('This section describe about My Sites')
        expect(paragraphElement).toBeInTheDocument()
    })
})
