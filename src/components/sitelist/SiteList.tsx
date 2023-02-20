import axios from 'axios'
import React, { useEffect } from 'react'
import { Site } from 'types/site'
import Loader from 'components/ui/Loader'
import SiteLine from 'components/sitelist/SiteLine'

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
        <div>
            <h1>Your Sites</h1>
            <Loader />
        </div>
    ) : (
        <div className="sitesList">
            {sites.map((site) => (
                <SiteLine key={site.id} site={site} />
            ))}
        </div>
    )
}

export default SiteList
