import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'components/app/App'
import { UserContextProvider } from 'contexts/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </React.StrictMode>
)
