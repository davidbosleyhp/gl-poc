import React from 'react'
import { Box, PageHeader, Paragraph } from 'grommet'
import { Link, useRouteError } from 'react-router-dom'

export default function SitesError() {
    const error = useRouteError() as Error
    return (
        <Box className="sites-error">
            <PageHeader>Site Error</PageHeader>
            <Paragraph>{error.message}</Paragraph>
            <Link to="/Home">Back to Home</Link>
        </Box>
    )
}
