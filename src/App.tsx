import React from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import SiteList from './components/SiteList'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="sites" element={<SiteList />} />
            <Route path="about" element={<About />} />

            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

function App() {
    return (
        <ErrorBoundary>
            <RouterProvider router={router} />
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
