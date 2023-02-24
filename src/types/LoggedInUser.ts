import { Dispatch, SetStateAction } from 'react'

export type ILoggedInUser = {
    id: number
    name: string
    thumbnail: string
}

export type LoggedInUserContextType = {
    user: ILoggedInUser | null
    setUser: Dispatch<SetStateAction<ILoggedInUser | null>>
}
