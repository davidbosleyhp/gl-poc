import { Anchor, Box } from 'grommet'
import React from 'react'
import { Site } from 'types/Site'

interface SiteLineProps {
    site: Site
}

const SiteLine = (props: SiteLineProps) => {
    const detailUrl: string = '/sites/' + props.site.id
    return (
        <Box pad="small" background={{ color: 'brand', opacity: true }} className="siteLine">
            <Anchor href={detailUrl} label={props.site.name} />
        </Box>
    )
}

export default SiteLine
