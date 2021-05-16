export type UsersType = {
    id: number
    status: string,
    name: string
    location: { city: string, country: string },
    follow: boolean
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number) => ({type: 'UN-FOLLOW', userId} as const)
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', users} as const)

type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

const initialState: UsersType[] = []
export const usersReducer = (state = initialState, action: ActionType): UsersType[] => {
    switch (action.type) {
        case "FOLLOW": {
            const copyState = [...state]
            const item = copyState.find(el => el.id === action.userId)
            if (item) {
                item.follow = false
            }
            return copyState
        }
        case "UN-FOLLOW": {
            const copyState = [...state]
            const item = copyState.find(el => el.id === action.userId)
            if (item) {
                item.follow = true
            }
            return copyState
        }
        case "SET-USERS":
            return [...state, ...action.users]
        default:
            return state
    }
}
