import React, { useEffect } from 'react'
import { Site } from 'types/site'
import Loader from 'components/ui/Loader'
import SiteLine from 'components/sitelist/SiteLine'
import { Box } from 'grommet'
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
                console.log(result.data)
                setSites(result.data)
                setIsLoading(false)
            }
            getSites()
        }
    })

    return isLoading ? (
        <Box>
            <Loader />
        </Box>
    ) : (
        <Box gap="small" border={{ side: 'between', size: 'large' }}>
            {sites.map((site: Site) => (
                <SiteLine key={site.id} site={site} />
            ))}
        </Box>
    )
}

export default SiteList
