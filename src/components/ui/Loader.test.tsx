import React from 'react'
import { render, screen } from '@testing-library/react'
import Loader from 'components/ui/Loader'

describe('Loader Component', () => {
    test('Loader: renders loading message', () => {
        render(<Loader />)
        const linkElement = screen.getByText('Loading...')
        expect(linkElement).toBeInTheDocument()
    })
})
