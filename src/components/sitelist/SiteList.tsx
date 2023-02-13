import axios from 'axios'
import React, { useEffect } from 'react'
import { Site } from 'types/site'
import Loader from 'components/ui/Loader'
import SiteLine from 'components/sitelist/SiteLine'
import 'components/sitelist/SiteLine.css'

const SiteList = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [sites, setSites] = React.useState<Site[]>([])

    useEffect(() => {
        if (isLoading) {
            const getSites = async () => {
                const result = await axios(`http://localhost:5163/sites`)
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
            <h1>Your Sites</h1>
            {sites.map((site) => (
                <SiteLine key={site.id} site={site} />
            ))}
        </div>
    )
}

export default SiteList
