import React from 'react'
import { Grid, PageHeader, PageContent } from 'grommet'
import CardTemplate from 'components/ui/CardTemplate'

export default function Home() {
    return (
        <div className="home">
            <PageHeader title="Welcome to MySites!" />
            <PageContent>
                <Grid columns="medium" gap="large" pad={{ bottom: 'large' }}>
                    <CardTemplate title={'Card 1'} />
                    <CardTemplate title={'Card 2'} />
                    <CardTemplate title={'Card 3'} />
                </Grid>
                <h2>Welcome</h2>
                <p>This is the home page</p>
            </PageContent>
        </div>
    )
}
