import React from 'react'
import { Anchor, Avatar, Box, Header, Nav, Text } from 'grommet'

const items = [
    { label: 'Home', href: '/' },
    { label: 'Sites', href: 'sites' },
    { label: 'About', href: 'about' },
]

const gravatarSrc = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80'

const AppBar = (props: object) => {
    return (
        <Header
            className="App-header"
            background="brand"
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation="medium"
            {...props}
        >
            <Text size="large">My Sites</Text>
            <Nav direction="row">
                {items.map((item) => (
                    <Anchor href={item.href} label={item.label} key={item.label} />
                ))}
            </Nav>
            <Box direction="row" align="center" gap="small">
                <Avatar src={gravatarSrc} />
                <Anchor color="white" href="https://github.com/ShimiSun">
                    Shimi Sun
                </Anchor>
            </Box>
        </Header>
    )
}

export default AppBar
