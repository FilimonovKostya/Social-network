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
    pageSize: number
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

const initialState: UsersType = {items: [], currentPage: 1, error: null, totalCount: 0, pageSize: 20}

export const usersReducer = (state = initialState, action: ActionType): UsersType => {
    debugger
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                items: state.items.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }

        case "UN-FOLLOW":
            return {
                ...state,
                items: state.items.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
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
