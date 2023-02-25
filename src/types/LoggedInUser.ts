export type ILoggedInUser = {
    id: number
    name: string
    thumbnail: string
}

export type LoggedInUserContextType = {
    user: ILoggedInUser | null
    //setUser: Dispatch<SetStateAction<ILoggedInUser | null>>
    signIn: (user: ILoggedInUser) => Promise<void>
    signOut: () => Promise<void>
}
