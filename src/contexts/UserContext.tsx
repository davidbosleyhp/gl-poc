import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'

import { ILoggedInUser, LoggedInUserContextType } from 'types/LoggedInUser'

export const UserContext = createContext<LoggedInUserContextType | null>(null)

type UserContextProviderProps = {
    children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
    const [user, setUser] = useState<ILoggedInUser | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    // Runs once when the component first mounts
    useEffect(() => {
        if (!user) {
            fakeAsyncLoginCheck().then((activeUser) => {
                if (activeUser) {
                    console.log('fake async login check called')
                    setUser(activeUser)
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            })
        }
    })

    const signIn = useCallback(async (user: ILoggedInUser): Promise<void> => {
        const result = await fakeAsyncLogin()

        if (result) {
            console.log('user has logged in')

            setUser(user)
            //remove thsi server side api is used
            sessionStorage.setItem('loggedInUser', JSON.stringify(user))
        }
    }, [])

    const signOut = useCallback(async (): Promise<void> => {
        const result = await fakeAsyncLogout()

        if (result) {
            console.log('The User has logged out')
            setUser(null)
            //remove thsi server side api is used
            sessionStorage.removeItem('loggedInUser')
        }
    }, [])

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
                resolve('The user has successfully logged out of the server')
            }, 300)
        })
    }

    // Fixes the reload issue
    const fakeAsyncLoginCheck = async (): Promise<ILoggedInUser | null> => {
        const item = window.sessionStorage.getItem('loggedInUser')
        const sessionStorageValue = item ? (JSON.parse(item) as ILoggedInUser) : null
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                resolve(sessionStorageValue)
            }, 300)
        })
    }

    const memoValue = useMemo(
        () => ({
            user,
            signIn,
            signOut,
            loading,
        }),
        [user, signIn, signOut, loading]
    )
    return <UserContext.Provider value={memoValue}>{children}</UserContext.Provider>
}

// context consumer hook
export const useUserContext = () => {
    // get the context
    const context = useContext(UserContext)

    // if `undefined`, throw an error
    if (context === null) {
        throw new Error('useUserContext was used outside of its Provider')
    }

    return context
}
