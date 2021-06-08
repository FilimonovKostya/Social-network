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
    isLoading: boolean
    isDisabled: boolean
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollow = (userId: number) => ({type: 'UN-FOLLOW', userId} as const)
export const setUsers = (users: ItemsType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalCount = (totalCount: number) => ({type: 'SET-TOTAL-COUNT', totalCount} as const)
export const setLoading = (isLoading: boolean) => ({type: 'SET-LOADING-STATUS', isLoading} as const)
export const setDisabledButton = (isDisabled: boolean) => ({type: 'SET-DISABLED-STATUS', isDisabled} as const)

type ActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setLoading>
    | ReturnType<typeof setDisabledButton>

const initialState: UsersType = {items: [], currentPage: 1, error: null, totalCount: 0, pageSize: 20, isLoading: false, isDisabled: false}

export const usersReducer = (state = initialState, action: ActionType): UsersType => {
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

        case "SET-LOADING-STATUS":
            return {...state, isLoading: action.isLoading}

        case "SET-DISABLED-STATUS":
            return {
                ...state,
                isDisabled: action.isDisabled
            }

        default:
            return state
    }
}
