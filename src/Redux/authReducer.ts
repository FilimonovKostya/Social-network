import {Dispatch} from "redux";
import {API, LoginType} from "../Api/api";

export type InitialStateType = {
    isAuth: boolean
    resultCode: number
    messages: string[],
    data: {
        id: number,
        email: string,
        login: string
    }
}

type ActionType = ReturnType<typeof setLoginDataAC> | ReturnType<typeof setAuthDataAC>

const initialState: InitialStateType = {isAuth: false, messages: [''], data: {id: 0, email: '', login: ''}, resultCode: 0}

export const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        case "SET-LOGIN":
            return {
                ...state,
                isAuth: true,
                data: {...action.data}
            }

        case "SET-AUTH":
            return {
                ...state,
                isAuth: action.isAuth
            }

        default:
            return state
    }
}

export const setLoginDataAC = (data: { id: number, email: string, login: string }) => ({type: 'SET-LOGIN', data} as const)
export const setAuthDataAC = (isAuth: boolean) => ({type: 'SET-AUTH', isAuth} as const)

export const getAuthDataTC = () => async (dispatch: Dispatch) => {

    const res = await API.getAuth()

    if (res.data.resultCode === 0) {
        dispatch(setLoginDataAC(res.data.data))
    }

}

export const setLoginDataTC = (data: LoginType) => async (dispatch: Dispatch) => {

    await API.setLogin(data)

    dispatch(setAuthDataAC(true))

}

export const logoutTC = () => async (dispatch: Dispatch) => {

    await API.logout()

    dispatch(setLoginDataAC({id: 0, email: '', login: ''}))

    dispatch(setAuthDataAC(false))

}
