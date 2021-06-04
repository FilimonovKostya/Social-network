export type ItemsType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    status: string | null
    followed: boolean
}
export type UsersType = {
    items: ItemsType[]
    currentPage: number
    totalCount: number
    error: string[] | null
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number) => ({type: 'UN-FOLLOW', userId} as const)
export const setUsersAC = (users: ItemsType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalCountAC = (totalCount: number) => ({type: 'SET-TOTAL-COUNT', totalCount} as const)

type ActionType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>

const initialState: UsersType = {items: [], currentPage: 1, error: null, totalCount: 0}

export const usersReducer = (state = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case "FOLLOW": {
            const copyState = {...state}
            const item = copyState.items.find(el => el.id === action.userId)
            if (item) {
                item.followed = false
            }
            return copyState
        }

        case "UN-FOLLOW": {
            const copyState = {...state}
            const item = copyState.items.find(el => el.id === action.userId)
            if (item) {
                item.followed = true
            }
            return copyState
        }

        case "SET-USERS":
            return {...state, items: [...action.users, ...state.items]}

        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}

        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}

        default:
            return state
    }
}
