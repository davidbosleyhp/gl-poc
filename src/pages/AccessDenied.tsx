import { Page, PageHeader, Paragraph } from 'grommet'
import React from 'react'
import { Link } from 'react-router-dom'

const AccessDenied = () => {
    return (
        <Page>
            <PageHeader
                title="Acccess Denied"
                size="small"
                a11yTitle="Access Denied"
                pad="xsmall"
            />
            <Paragraph>This page access is denied. Please login first.</Paragraph>
            <Paragraph>
                Go to the <Link to="/">Homepage</Link>
            </Paragraph>
        </Page>
    )
}

export default AccessDenied
