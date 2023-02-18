import React from 'react'
import SiteList from 'components/sitelist'
import { Main, PageHeader } from 'grommet'

export default function SitesPage() {
    return (
        <Main>
            <PageHeader title=" Your Sites" />
            <SiteList />
        </Main>
    )
}
