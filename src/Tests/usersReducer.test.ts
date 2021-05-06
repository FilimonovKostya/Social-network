import {followAC, usersReducer, UsersType} from "../Redux/usersReducer";


test('Change status should be correct', () => {
    const initialState: UsersType[] = [
        {id: 1, name: 'Dimych Kuzeberdin', location: {city: 'Mogilev', country: 'Belarus'}, status: 'I am a Boss', follow: true},
        {id: 2, name: 'Vasya Abdula', location: {city: 'Moscow', country: 'Russia'}, status: 'I am a Batman', follow: true},
        {id: 3, name: 'Ivanov Petrov', location: {city: 'Kiev', country: 'Ukraine'}, status: 'I am a React Developer', follow: true},
    ]

    const newState = usersReducer(initialState, followAC(2))

    expect(newState[1].follow).toBe(false)
    expect(newState.length).toBe(3)
})

export {}
