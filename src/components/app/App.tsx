import React from 'react'
import ErrorBoundary from 'components/error-boundary/ErrorBoundary'
import MainLayout from 'layouts/MainLayout'
import SitesPage from 'pages/SitesPage'
import SitesError from 'components/sitelist/SitesError'
import ProfileLayout from 'layouts/ProfileLayout'
import Home from 'pages/Home'
import About from 'pages/About'
import NotFound from 'pages/NotFound'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import PersonalInfo from 'pages/PersonalInfo'
//import { UserContextProvider } from 'contexts/UserContext'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="sites" element={<SitesPage />} errorElement={<SitesError />} />
            </Route>
            <Route path="profile" element={<ProfileLayout />}>
                <Route path="personalInfo" element={<PersonalInfo />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const App = () => {
    return (
        //<UserContextProvider>
        <ErrorBoundary>
            <RouterProvider router={router} />;
        </ErrorBoundary>
        //</UserContextProvider>
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
