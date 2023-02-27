import React from 'react'
import ErrorBoundary from 'components/error-boundary/ErrorBoundary'
import MainLayout from 'layouts/MainLayout'
import SitesPage from 'pages/site/SitesPage'
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
import ProtectedRoute from 'components/ui/ProtectedRoute'
import { ThemeProvider } from 'contexts/ThemeContext'
import SiteDetailPage from 'pages/site/SiteDetailPage'
import { UserContextProvider } from 'contexts/UserContext'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                if (user)
                {
                    <Route
                        path="sites"
                        element={
                            <ProtectedRoute>
                                <SitesPage />
                            </ProtectedRoute>
                        }
                        errorElement={<SitesError />}
                    />
                }
                if (user)
                {
                    <Route
                        path="sites/:id"
                        element={
                            <ProtectedRoute>
                                <SiteDetailPage />
                            </ProtectedRoute>
                        }
                        errorElement={<SitesError />}
                    />
                }
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
        <ErrorBoundary>
            <ThemeProvider>
                <UserContextProvider>
                    <RouterProvider router={router} />;
                </UserContextProvider>
            </ThemeProvider>
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
