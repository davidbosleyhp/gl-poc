import React from 'react'
import { Anchor, Avatar, Box, Button, Header, Nav, Text } from 'grommet'
import { Moon, Sun } from 'grommet-icons'

const gravatarSrc = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80'

interface AppBarProps {
    dark: boolean
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}
const AppBar: React.FC<AppBarProps> = ({ dark, setDark }) => {
    return (
        <Header
            className="App-header"
            background="brand"
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation="medium"
        >
            <Text size="large">My Sites</Text>
            <Nav direction="row">
                <Anchor label="Home" href="/" />
                <Anchor label="Sites" href="/sites" />
            </Nav>
            <Box direction="row" align="center" gap="small">
                <Avatar src={gravatarSrc} />
                <Anchor color="white" href="/profile/personalInfo">
                    Shimi Sun
                </Anchor>
            </Box>
            <Button
                a11yTitle={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                icon={dark ? <Moon /> : <Sun />}
                onClick={() => setDark(!dark)}
                tip={{
                    content: (
                        <Box pad="small" round="small" background={dark ? 'dark-1' : 'light-3'}>
                            {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        </Box>
                    ),
                    plain: true,
                }}
            />
        </Header>
    )
}

export default AppBar
