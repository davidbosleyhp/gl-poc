import { Main } from 'grommet'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Main>
            <h2>Page not found!</h2>
            <p>This page does npt exist or access is denied. Please contact administrator.</p>

            <p>
                Go to the <Link to="/">Homepage</Link>
            </p>
        </Main>
    )
}

export default NotFound
