import React from 'react'
import { render, screen } from '@testing-library/react'
import { Grommet } from 'grommet'
import { hpe } from 'grommet-theme-hpe'
import PersonalInfo from './PersonalInfo'

// Dummy test - fill in as component becomes real.
// will need to mock the api call
describe('PersonalInfo', () => {
    test('Profile page: Test profile page div exists', () => {
        render(
            <Grommet theme={hpe}>
                <PersonalInfo />{' '}
            </Grommet>
        )
        const divElement = screen.getByText('Personal Information')
        expect(divElement).toBeInTheDocument()
    })

    test('Profile page: Test profile page show name', () => {
        render(
            <Grommet theme={hpe}>
                <PersonalInfo />{' '}
            </Grommet>
        )
        const divElement = screen.getByText('Name:')
        expect(divElement).toBeInTheDocument()
        const divElement1 = screen.getByText('Saroj EKka')
        expect(divElement1).toBeInTheDocument()
    })

    test('Profile page: Test profile page show age', () => {
        render(
            <Grommet theme={hpe}>
                <PersonalInfo />{' '}
            </Grommet>
        )
        const divElement = screen.getByText('Age:')
        expect(divElement).toBeInTheDocument()
        const divElement1 = screen.getByText('49 years')
        expect(divElement1).toBeInTheDocument()
    })

    test('Profile page: Test profile page show language', () => {
        render(
            <Grommet theme={hpe}>
                <PersonalInfo />{' '}
            </Grommet>
        )
        const divElement = screen.getByText('Language:')
        expect(divElement).toBeInTheDocument()
        const divElement1 = screen.getByText('English, Hindi')
        expect(divElement1).toBeInTheDocument()
    })
})
