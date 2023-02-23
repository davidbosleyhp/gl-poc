import React from 'react'
import { Anchor, Avatar, Box, Button, Header, Heading, Nav } from 'grommet'
import { Hpe, Login, Moon, Sun, User } from 'grommet-icons'
import { UserSession } from 'types/UserSession'

interface AppBarProps {
    dark: boolean
    setDark: React.Dispatch<React.SetStateAction<boolean>>
    userSession: UserSession | null
}
const AppBar: React.FC<AppBarProps> = ({ dark, setDark, userSession }) => {
    return (
        <Header
            className="App-header"
            background="brand"
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation="medium"
        >
            <Anchor href="https://www.hpe.com" icon={<Hpe />} label="HPE" />
            <Box flex={false} direction="row" align="center" margin={{ left: 'small' }}>
                <Heading
                    a11yTitle="My Siites"
                    level="2"
                    margin={{ left: 'small', vertical: 'none' }}
                >
                    My Sites
                </Heading>
            </Box>
            <Box direction="row" align="right" gap="small">
                <Nav direction="row">
                    <Anchor label="Home" href="/" />
                    <Anchor label="Sites" href="/sites" />
                    <Anchor label="About" href="/about" />
                    {userSession !== null ? (
                        <Anchor color="white" href="/profile/personalInfo">
                            {userSession.user.name}
                        </Anchor>
                    ) : (
                        <Button icon={<User />} tip="Login" />
                    )}
                </Nav>
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
            </Box>
        </Header>
    )
}

export default AppBar
