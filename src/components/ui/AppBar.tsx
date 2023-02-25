import React from 'react'
import { Anchor, Box, Button, Header, Heading, Nav } from 'grommet'
import { Hpe, Logout, Moon, Sun, User } from 'grommet-icons'
import { useUserContext } from 'contexts/UserContext'
import { ILoggedInUser } from 'types/LoggedInUser'

interface AppBarProps {
    dark: boolean
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const loggedInUser: ILoggedInUser = {
    id: 1000,
    name: 'Saroj Ekka',
    thumbnail: '//s.gravatar.com/avatar/b226da5c619b18b44eb95c30be393953?s=80',
}

const AppBar: React.FC<AppBarProps> = ({ dark, setDark }) => {
    const { user, signIn, signOut } = useUserContext()
    console.log('AppBar:')
    console.log(user)
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
            <Box direction="row" align="right" gap="small" pad="small">
                <Nav direction="row" align="vertical">
                    <Anchor label="Home" href="/" aria-label="Home" />
                    <Anchor label="Sites" href="/sites" />
                    <Anchor label="About" href="/about" />
                    {user !== null ? (
                        <Box direction="row" gap="small" pad="small">
                            <Anchor color="white" href="/profile/personalInfo">
                                {user.name}
                            </Anchor>
                            <Button
                                icon={<Logout />}
                                tip="LogOut"
                                label="LogOut"
                                onClick={() => signOut()}
                            />
                        </Box>
                    ) : (
                        <Box>
                            <Button
                                icon={<User />}
                                tip="Login"
                                label="Login"
                                onClick={() => signIn(loggedInUser)}
                            />
                        </Box>
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
