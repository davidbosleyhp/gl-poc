import { Page, PageContent, PageHeader, Paragraph } from 'grommet'
import React from 'react'

export default function About() {
    return (
        <Page className="about">
            <PageHeader
                title="About MySites"
                subtitle="A product of HPE."
                size="small"
                a11yTitle="About MySites"
                pad="xsmall"
            />
            <PageContent>
                <Paragraph>This section describe about My Sites</Paragraph>
            </PageContent>
        </Page>
    )
}
