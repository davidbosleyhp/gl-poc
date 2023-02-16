import React, { useState } from 'react'
import { Box, Button, Grid, Grommet, Page, PageContent, PageHeader } from 'grommet'
import { Moon, Sun } from 'grommet-icons'
import AppBar from 'components/ui/AppBar'
import CardTemplate from 'components/ui/CardTemplate'
import { hpe } from 'grommet-theme-hpe'

export default function RootLayout() {
    const [dark, setDark] = useState(false)

    return (
        <Grommet className="root-layout" theme={hpe} full themeMode={dark ? 'dark' : 'light'}>
            <Page>
                <AppBar>
                    <Button
                        a11yTitle={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        icon={dark ? <Moon /> : <Sun />}
                        onClick={() => setDark(!dark)}
                        tip={{
                            content: (
                                <Box
                                    pad="small"
                                    round="small"
                                    background={dark ? 'dark-1' : 'light-3'}
                                >
                                    {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                                </Box>
                            ),
                            plain: true,
                        }}
                    />
                </AppBar>
                <PageContent>
                    <PageHeader title="Welcome to MySites!" />
                    <Grid columns="medium" gap="large" pad={{ bottom: 'large' }}>
                        <CardTemplate title={'Card 1'} />
                        <CardTemplate title={'Card 2'} />
                        <CardTemplate title={'Card 3'} />
                    </Grid>
                </PageContent>
            </Page>
        </Grommet>
    )
}
