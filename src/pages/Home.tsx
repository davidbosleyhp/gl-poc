import React from 'react'
import { Page, Grid, PageHeader, PageContent, Paragraph } from 'grommet'
import CardTemplate from 'components/ui/CardTemplate'

export default function Home() {
    return (
        <Page className="home">
            <PageHeader title="MySites Home" size="small" a11yTitle="MySites Home" pad="xsmall" />
            <PageContent>
                <Paragraph>Welcome to MySites!</Paragraph>
                <Grid columns="medium" gap="large" pad={{ bottom: 'large' }}>
                    <CardTemplate title={'Card 1'} />
                    <CardTemplate title={'Card 2'} />
                    <CardTemplate title={'Card 3'} />
                </Grid>
            </PageContent>
        </Page>
    )
}
