import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header className="App-header">
                <nav className="App-nav">
                    <h1 className="App-nav-h1">My Sites</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="sites">Sites</NavLink>
                    <NavLink to="about">About</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}
