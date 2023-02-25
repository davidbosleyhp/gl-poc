import { useUserContext } from 'contexts/UserContext'
import React from 'react'
//import { Navigate } from 'react-router-dom'
import AccessDenied from 'pages/AccessDenied'

type ProtectedRouteProps = {
    children: JSX.Element
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user } = useUserContext()

    if (!user) {
        console.log(1)
        return <AccessDenied />
        //return null
    }
    return children
}
export default ProtectedRoute
