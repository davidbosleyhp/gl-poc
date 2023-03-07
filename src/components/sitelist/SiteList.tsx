import React, { useEffect } from 'react'
import { Site } from 'types/Site'
import Loader from 'components/ui/Loader'
import { Anchor, Box } from 'grommet'
import axios from 'axios'

const SiteList = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [sites, setSites] = React.useState<Site[]>([])

    useEffect(() => {
        if (isLoading) {
            const getSites = async () => {
                const result = await axios(process.env.REACT_APP_API_URL + `/api/sites`, {
                    headers: { accepts: 'application/json' },
                })
                //console.log(result.data)
                setSites(result.data)
                setIsLoading(false)
            }
            getSites()
        }
    })

    return isLoading ? (
        <Box className="site-lists">
            <Loader />
        </Box>
    ) : (
        <Box className="site-lists" gap="xxxsmall" border={{ side: 'between', size: 'small' }}>
            {sites.map((site: Site) => (
                <Box
                    key={site.id.toString()}
                    pad="small"
                    background={{ color: 'brand', opacity: true }}
                    className="siteLine"
                >
                    <Anchor href={'/sites/' + site.id} label={site.name} />
                </Box>

                //<SiteLine key={site.id} site={site} />
            ))}
        </Box>
    )
}

export default SiteList
