import React from 'react'
import { render, screen } from '@testing-library/react'
import ToggleDarkMode from 'components/ui/ToggleDarkMode'
//import userEvent from '@testing-library/user-event'

describe('Toggle Dark Mode Component tests', () => {
    test('ToggleDarkMode: test dark mode button icon exists', () => {
        render(<ToggleDarkMode />)
        // eslint-disable-next-line sonarjs/no-duplicate-string
        const buttonElement = screen.getByRole('button', { name: 'Switch to Light Mode' })
        expect(buttonElement).toBeInTheDocument()
    })

    test('ToggleDarkMode: test svg tag with moon icon exists', () => {
        render(<ToggleDarkMode />)
        const buttonElement = screen.getByRole('button', { name: 'Switch to Light Mode' })
        expect(buttonElement.getElementsByTagName('svg')[0]).toHaveAccessibleName('Moon')
    })

    // test('ToggleDarkMode: Test toogle of button', async () => {
    //     render(<ToggleDarkMode />)
    //     const buttonElement = screen.getByRole('button', { name: 'Switch to Light Mode' })
    //     await waitFor(() => fireEvent.click(buttonElement))

    //     const newbuttonElement = screen.getByRole('button', { name: 'Switch to Dark Mode' })
    //     expect(newbuttonElement).toBeInTheDocument()
    // })
})
