
export type UsersType = {
    id: number
    status: string,
    name: string
    location: { city: string, country: string },
    follow:boolean
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
const unFollowAC = (userId: number) => ({type: 'UN-FOLLOW', userId} as const)
const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', users} as const)

type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

const initialState: UsersType[] = [
    {id: 1, name: 'Dimych Kuzeberdin', location: {city: 'Mogilev', country: 'Belarus'}, status: 'I am a Boss', follow: true},
    {id: 2, name: 'Vasya Abdula', location: {city: 'Moscow', country: 'Russia'}, status: 'I am a Batman',follow: true},
    {id: 3, name: 'Ivanov Petrov', location: {city: 'Kiev', country: 'Ukraine'}, status: 'I am a React Developer',follow: true},
]

export const usersReducer = (state = initialState, action: ActionType): UsersType[] => {
    switch (action.type) {
        case "FOLLOW": {
          return state.filter(el => el.id === action.userId ? el.follow = true : el)
        }
        case "UN-FOLLOW": {
            return state.filter(el => el.id === action.userId ? el.follow = false : el)
        }
        default:
            return state
    }
}
