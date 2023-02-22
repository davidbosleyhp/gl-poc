import React from 'react'
import { Box, Grid, PageHeader, PageContent, Main } from 'grommet'
import CardTemplate from 'components/ui/CardTemplate'

export default function Home() {
    return (
        <Box className="home">
            <PageHeader title="Home Page" />
            <p>Welcome to MySites!</p>
            <br />
            <br />
            <PageContent>
                <Grid columns="medium" gap="large" pad={{ bottom: 'large' }}>
                    <CardTemplate title={'Card 1'} />
                    <CardTemplate title={'Card 2'} />
                    <CardTemplate title={'Card 3'} />
                </Grid>
            </PageContent>
        </Box>
    )
}
