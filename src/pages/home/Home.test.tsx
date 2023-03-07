import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from 'pages/home/Home'
import { Grommet } from 'grommet'
import { hpe } from 'grommet-theme-hpe'

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('Home', () => {
    test('Home page: Test home page div exists', () => {
        render(
            <Grommet theme={hpe}>
                <Home />{' '}
            </Grommet>
        )
        const divElement = screen.getByText('MySites Home')
        expect(divElement).toBeInTheDocument()
        //expect(divElement).toHaveTextContent('Site Detail')
    })
})
