export interface ILoggedInUser {
    id: number
    name: string
    thumbnail: string
}

export type LoggedInUserContextType = {
    user: ILoggedInUser | null
    saveUser: (user: ILoggedInUser | null) => void
}
