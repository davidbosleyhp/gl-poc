import React from 'react'
import SiteList from 'components/sitelist/SiteList'
import { Page, PageHeader } from 'grommet'

export default function SitesPage() {
    return (
        <Page data-testid="divSitePage">
            <PageHeader title="Your Sites" a11yTitle="Your Sites" size="small" pad="xsmall" />
            <SiteList />
        </Page>
    )
}
