import { Box, FormField, Paragraph, Text } from 'grommet'
import React from 'react'
import { Site } from 'types/Site'

export interface SiteDetailProps {
    detail: Site | undefined
}

const SiteDetail = (props: SiteDetailProps) => {
    return (
        <Box
            data-testid="divSiteDetail"
            pad="small"
            background={{ color: 'brand', opacity: true }}
            className="site-detail"
            width="large"
            align="left"
        >
            {props.detail != undefined ? (
                <>
                    <FormField label="Id">
                        <Text>{props.detail?.id}</Text>
                    </FormField>
                    <FormField label="Name">
                        <Text>{props.detail?.name}</Text>
                    </FormField>
                    <FormField label="Geo Location">
                        <Text>{props.detail?.geolocation}</Text>
                    </FormField>
                    <FormField label="Altitude">
                        <Text>{props.detail?.altitude}</Text>
                    </FormField>
                    <FormField label="Seismic Zone">
                        <Text>{props.detail?.seismic_zone}</Text>
                    </FormField>
                </>
            ) : (
                <Paragraph>Site detail not found</Paragraph>
            )}
        </Box>
    )
}

export default SiteDetail
