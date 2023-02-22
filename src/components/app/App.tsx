import React from 'react'
import ErrorBoundary from 'components/error-boundary/ErrorBoundary'
import MainLayout from 'layouts/MainLayout'
import SitesPage from 'pages/SitesPage'
import SitesError from 'components/sitelist/SitesError'
import { Home } from 'grommet-icons'
import ProfileLayout from 'layouts/ProfileLayout'
import About from 'pages/About'
import NotFound from 'pages/NotFound'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import PersonalInfo from 'pages/PersonalInfo'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="sites" element={<SitesPage />} errorElement={<SitesError />} />
            <Route path="profile" element={<ProfileLayout />}>
                <Route path="personalInfo" element={<PersonalInfo />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

function App() {
    return (
        <ErrorBoundary>
            <RouterProvider router={router} />;
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
