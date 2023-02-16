import ErrorBoundary from 'components/error-boundary'
import MainLayout from 'layouts/MainLayout'
import React from 'react'
// layouts

function App() {
    return (
        <ErrorBoundary>
            <MainLayout />
        </ErrorBoundary>
    )
}

export default App

export function divide(a: number, b: number): number {
    // watch for divide by zero
    if (b === 0) {
        throw new Error("You can't divide by zero.")
    }

    return a / b
}

export function add(a: number, b: number): number {
    return a + b
}
