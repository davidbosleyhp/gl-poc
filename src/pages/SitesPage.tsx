import React from 'react'
import SiteList from 'components/sitelist'
import { Box, PageHeader } from 'grommet'

export default function SitesPage() {
    return (
        <Box>
            <PageHeader title=" Your Sites" />
            <SiteList />
        </Box>
    )
}
