import { useUserContext } from 'contexts/UserContext'
import React from 'react'
//import { Navigate } from 'react-router-dom'
import AccessDenied from 'pages/accessdenied/AccessDenied'

type ProtectedRouteProps = {
    children: JSX.Element
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user } = useUserContext()

    if (!user) {
        return <AccessDenied />
    }
    return children
}
export default ProtectedRoute
