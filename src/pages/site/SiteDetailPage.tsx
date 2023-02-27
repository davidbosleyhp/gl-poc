import SiteDetail from 'components/sitelist/SiteDetail'
import { Page, PageHeader } from 'grommet'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Site } from 'types/Site'

function SiteDetailPage() {
    const params = useParams()
    const [detail, setDetail] = useState(undefined)
    useEffect(() => {
        const getSite = async () => {
            const result = await axios(process.env.REACT_APP_API_URL + `/api/sites/` + params.id, {
                headers: { accepts: 'application/json' },
            })
            //const detail = result.data.find((x: Site) => x.id == Number(params.id))
            setDetail(result.data)
        }
        getSite()
    })

    return (
        <Page>
            <PageHeader title="Site Detail" a11yTitle="Site Detail" size="small" pad="xsmall" />
            <SiteDetail detail={detail} />
        </Page>
    )
}

export default SiteDetailPage
