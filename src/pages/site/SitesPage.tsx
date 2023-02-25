import React from 'react'
import SiteList from 'components/sitelist'
import { Page, PageHeader } from 'grommet'

export default function SitesPage() {
    return (
        <Page>
            <PageHeader title="Your Sites" a11yTitle="Your Sites" size="small" pad="xsmall" />
            <SiteList />
        </Page>
    )
}
