import { Anchor, Box } from 'grommet'
import React from 'react'
import { Site } from 'types/site'

interface SiteLineProps {
    site: Site
}

const SiteLine = (props: SiteLineProps) => {
    return (
        <Box pad="medium" background="brand" className="siteLine">
            <Anchor href="/" label={props.site.name} />
        </Box>
    )
}

export default SiteLine
