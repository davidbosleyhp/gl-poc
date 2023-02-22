import { Box } from 'grommet'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Box>
            <h2>Page not found!</h2>
            <p>This page does npt exist or access is denied. Please contact administrator.</p>

            <p>
                Go to the <Link to="/">Homepage</Link>
            </p>
        </Box>
    )
}

export default NotFound
