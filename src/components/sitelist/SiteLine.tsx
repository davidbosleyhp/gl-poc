import { Anchor, Box } from 'grommet'
import React from 'react'
import { Site } from 'types/Site'

interface SiteLineProps {
    site: Site
}

const SiteLine = (props: SiteLineProps) => {
    return (
        <Box pad="small" background={{ color: 'brand', opacity: true }} className="siteLine">
            <Anchor href="/" label={props.site.name} />
        </Box>
    )
}

export default SiteLine
