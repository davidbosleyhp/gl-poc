import React from 'react'
import { Box, Paragraph } from 'grommet'
import { Link, useRouteError } from 'react-router-dom'

export default function SitesError() {
    const error = useRouteError() as Error
    return (
        <Box className="sites-error">
            <Box>Site Error</Box>
            <Paragraph>{error.message}</Paragraph>
            <Link to="/Home">Back to Home</Link>
        </Box>
    )
}
