import React, { createContext, ReactNode, useState } from 'react'
import { ILoggedInUser, LoggedInUserContextType } from 'types/LoggedInUser'

const defaultLoggedInUserContextType = {
    user: null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    setUser: (user: ILoggedInUser) => {},
} as LoggedInUserContextType

export const UserContext = createContext<LoggedInUserContextType>(defaultLoggedInUserContextType)

type UserContextProviderProps = {
    children: ReactNode
}
export default function UserContextProvider({ children }: UserContextProviderProps) {
    const [user, setUser] = useState<ILoggedInUser | null>(null)

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

//export default UserContextProvider
