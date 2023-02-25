import React, { createContext, ReactNode, useContext, useState } from 'react'
import { ILoggedInUser, LoggedInUserContextType } from 'types/LoggedInUser'

// const defaultLoggedInUserContextType = {
//     user: null,
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
//     setUser: () => {},
// } as LoggedInUserContextType

export const UserContext = createContext<LoggedInUserContextType | null>(null)

type UserContextProviderProps = {
    children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
    // Get the value from session sotrage.
    const item = window.sessionStorage.getItem('loggedInUser')
    const sessionStorageValue = item ? (JSON.parse(item) as ILoggedInUser) : null

    // const sessionStorageValue: ILoggedInUser = JSON.parse(
    //     sessionStorage.getItem('loggedInUser') as ILoggedInUser | null)
    // )

    const [user, setUser] = useState<ILoggedInUser | null>(sessionStorageValue)

    const signIn = async (user: ILoggedInUser): Promise<void> => {
        const result = await fakeAsyncLogin()

        if (result) {
            console.log('user has logged in')

            setUser(user)
            sessionStorage.setItem('loggedInUser', JSON.stringify(user))
        }
    }

    const signOut = async (): Promise<void> => {
        const result = await fakeAsyncLogout()

        if (result) {
            console.log('The User has logged out')
            setUser(null)
            sessionStorage.setItem('loggedInUser', JSON.stringify(null))
        }
    }

    /// Mock Async Login API call.
    // TODO: Replace with your actual login API Call code
    const fakeAsyncLogin = async (): Promise<string> => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                resolve('Logged In')
            }, 300)
        })
    }

    // Mock Async Logout API call.
    // TODO: Replace with your actual logout API Call code
    const fakeAsyncLogout = async (): Promise<string> => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                resolve('The user has successfully logged on the server')
            }, 300)
        })
    }

    return <UserContext.Provider value={{ user, signIn, signOut }}>{children}</UserContext.Provider>
}

// context consumer hook
export const useUserContext = () => {
    // get the context
    const context = useContext(UserContext)

    // if `undefined`, throw an error
    if (context === null) {
        throw new Error('useUserContext was used outside of its Provider')
    }

    console.log('useUserContext:')
    console.log(context.user)
    return context
}
