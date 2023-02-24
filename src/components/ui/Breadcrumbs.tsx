import { Anchor, Box } from 'grommet'
import React from 'react'
//import { RouteObject } from 'react-router-dom'
import useBreadcrumbs, { BreadcrumbsRoute } from 'use-react-router-breadcrumbs'

const routes: BreadcrumbsRoute[] = [
    { index: true, breadcrumb: 'Home' },
    { path: '/about', breadcrumb: 'About' },
    { path: '/sites', breadcrumb: 'Sites' },
    { path: '*', breadcrumb: 'Page Not Found' },
]

function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs(routes)

    return (
        <Box direction="row" alignContent="">
            {breadcrumbs.map(({ breadcrumb, match }, index) => (
                <Box direction="row" key={index.toString()}>
                    <Anchor size="small" href={match.pathname} margin="xxsmall">
                        {breadcrumb}
                    </Anchor>
                    <Box alignSelf="center">{index !== breadcrumbs.length - 1 && '>'}</Box>
                </Box>
            ))}
        </Box>
    )
}

export default Breadcrumbs
