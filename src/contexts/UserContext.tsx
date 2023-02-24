import React, { useContext } from 'react'
import { createContext, useState } from 'react'
import { ILoggedInUser, LoggedInUserContextType } from 'types/LoggedInUser'

export const UserContext = createContext<LoggedInUserContextType | null>(null)

export const useCurrentUser = () => {
    const currentUserContext = useContext(UserContext)

    if (!currentUserContext) {
        throw new Error('UserContext has to be used within <UserContext.Provider>')
    }

    return currentUserContext
}

export const UserContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<ILoggedInUser | null>(null)
    console.log('UserContext:')
    console.log(user)
    const saveUser = (user: ILoggedInUser | null) => {
        if (user !== null) {
            const newUser: ILoggedInUser = {
                id: user.id,
                name: user.name,
                thumbnail: '',
            }
            setUser(newUser)
        }
    }

    return <UserContext.Provider value={{ user, saveUser }}>{children}</UserContext.Provider>
}

//export default UserContextProvider
