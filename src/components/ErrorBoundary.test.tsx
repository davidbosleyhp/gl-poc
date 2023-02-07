import { render, screen } from '@testing-library/react'
import React from 'react'
import ErrorBoundary from './ErrorBoundary'

interface CreateErrorTesterProps {
    throwError: boolean
    error: string
    pageText: string
}

class CreateErrorTester extends React.Component<CreateErrorTesterProps> {
    constructor(props: CreateErrorTesterProps) {
        super(props)
    }

    render() {
        if (this.props.throwError) {
            throw new Error(this.props.error)
        }

        return <div>{this.props.pageText}</div>
    }
}

describe('ErrorBoundary', () => {
    test('errors are shown on page', () => {
        render(
            <ErrorBoundary>
                <CreateErrorTester throwError={true} error="kaBOOM" pageText="Normal text" />
            </ErrorBoundary>
        )
        const errorElement = screen.getByText(/mething/i, { exact: false })
        expect(errorElement).toBeInTheDocument()
    })

    test('errors logged to console', () => {
        const logSpy = jest.spyOn(global.console, 'log')
        render(
            <ErrorBoundary>
                <CreateErrorTester throwError={true} error="kaBOOM" pageText="Normal text" />
            </ErrorBoundary>
        )
        expect(logSpy).toHaveBeenCalled()
        expect(logSpy).toHaveBeenCalledTimes(1)
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('kaBOOM'))

        logSpy.mockRestore()
    })
})
