import React from 'react'
import { Site } from 'types/site'

interface SiteLineProps {
    site: Site
}

const SiteLine = (props: SiteLineProps) => {
    return <div className="siteLine">{props.site.name}</div>
}

export default SiteLine
