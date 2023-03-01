import React from 'react'
import { Avatar, Button, Nav, Sidebar } from 'grommet'
import { Projects, Help, Clock } from 'grommet-icons'
const SideBar = () => {
    return (
        <Sidebar
            height={{ min: '100%' }}
            //responsive={false}
            background="brand"
            header={<Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />}
            footer={<Button icon={<Help />} hoverIndicator />}
        >
            <Nav gap="small">
                <Button icon={<Projects />} hoverIndicator />
                <Button icon={<Clock />} hoverIndicator />
            </Nav>
        </Sidebar>
    )
}

export default SideBar
