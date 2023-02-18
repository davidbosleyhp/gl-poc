//import axios from 'axios'
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
                /* axios version
                //const result = await axios(`http://localhost:5163/api/sites`)
                const result = await axios('/api/sites', {
                    headers: { accepts: 'application/json' },
                })
                console.log(result.data)
                 setSites(result.data)
                setIsLoading(false)
                */
                const result = await fetch(`/api/sites`, {
                    headers: { accept: 'application/json' },
                })

                setSites(await result.json())
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
