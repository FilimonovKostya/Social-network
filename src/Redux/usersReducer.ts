export type UsersType = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: {
        small: null | string,
        large: null | string,
    },
    status: string | null,
    followed: boolean

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
                item.followed = false
            }
            return copyState
        }
        case "UN-FOLLOW": {
            const copyState = [...state]
            const item = copyState.find(el => el.id === action.userId)
            if (item) {
                item.followed = true
            }
            return copyState
        }
        case "SET-USERS":
            return [...state, ...action.users]
        default:
            return state
    }
}
