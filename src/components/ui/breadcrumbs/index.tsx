import React from 'react'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import 'components/ui/breadcrumbs/breadcrumbs.css'
import { Nav } from 'grommet'
import { Link } from 'react-router-dom'

const routes = [
    { path: '/', breadcrumb: 'Home' },
    { path: '/sites', breadcrumb: 'Sites' },
    { path: '/about', breadcrumb: 'About' },
    { path: '*', breadcrumb: 'Page Not Found' },
]

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes)
    console.log(breadcrumbs)

    return (
        <Nav>
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <Link
                    key={match.pathname}
                    to={match.pathname}
                    className={
                        match.pathname === location.pathname
                            ? 'breadcrumb-active'
                            : 'breadcrumb-not-active'
                    }
                >
                    <span>{breadcrumb} / </span>
                </Link>
            ))}
        </Nav>
    )
}

export default Breadcrumbs
