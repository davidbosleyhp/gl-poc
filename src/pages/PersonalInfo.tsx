import { Page, PageContent, PageHeader } from 'grommet'
import React from 'react'

function PersonalInfo() {
    return (
        <Page>
            <PageHeader title="Profile" a11yTitle="Profile" size="small" pad="xsmall" />
            <PageContent>This is Profile Page</PageContent>
        </Page>
    )
}

export default PersonalInfo
