import axios from 'axios'
import React, { useEffect } from 'react'
import { Site } from 'types/site'
import Loader from 'components/ui/Loader'
import SiteLine from 'components/sitelist/SiteLine'
import 'styles/styles.css'

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
        <Loader />
    ) : (
        <div className="sitesList">
            {sites.map((site) => (
                <SiteLine key={site.id} site={site} />
            ))}
        </div>
    )
}

export default SiteList
