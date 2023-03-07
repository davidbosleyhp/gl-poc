import React from 'react'
import { render, screen } from '@testing-library/react'
import SideBar from 'components/ui/SideBar'

describe('SideBar Component tests', () => {
    test('SideBar: renders div with id divSideBar', () => {
        render(<SideBar />)
        const divElement = screen.getByTestId('divSideBar')
        expect(divElement).toBeInTheDocument()
    })

    test('SideBar: test renders div class side-bar', () => {
        render(<SideBar />)
        const divElement = screen.getByTestId('divSideBar')
        expect(divElement).toHaveClass('side-bar')
    })
    test('SideBar: test renders div have avatar icon', () => {
        render(<SideBar />)
        const imgElement = screen.getByRole('figure')
        expect(imgElement).toBeInTheDocument()
        expect(imgElement.getElementsByTagName('img')[0]).toHaveAttribute('role', 'presentation')
    })

    test('SideBar: test renders div have project icon', () => {
        render(<SideBar />)
        const imgElement = screen.getByRole('button', { name: 'Projects' })
        expect(imgElement).toBeInTheDocument()
    })

    test('SideBar: test renders div have clock icon', () => {
        render(<SideBar />)
        const imgElement = screen.getByRole('button', { name: 'Clock' })
        expect(imgElement).toBeInTheDocument()
    })
})
