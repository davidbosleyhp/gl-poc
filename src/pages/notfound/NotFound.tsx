import { Page, PageHeader, Paragraph } from 'grommet'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Page>
            <PageHeader
                title="Page not found!"
                size="small"
                a11yTitle="Page not found!"
                pad="xsmall"
            />
            <Paragraph>This page does not exist. Please contact administrator.</Paragraph>
            <Paragraph>
                Go to the <Link to="/">Homepage</Link>
            </Paragraph>
        </Page>
    )
}

export default NotFound
