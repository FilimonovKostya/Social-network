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

type ActionType = ReturnType<typeof setLoginData> | ReturnType<typeof setAuthData>

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

export const setLoginData = (data: { id: number, email: string, login: string }) => ({type: 'SET-LOGIN', data} as const)
export const setAuthData = (isAuth: boolean) => ({type: 'SET-AUTH', isAuth} as const)

export const getAuthDataTC = () => async (dispatch: Dispatch) => {

    const res = await API.getAuth()

    if (res.data.resultCode === 0) {
        dispatch(setLoginData(res.data.data))
    }

}

export const setLoginDataTC = (data: LoginType) => async (dispatch: Dispatch) => {

    await API.setLogin(data)

    dispatch(setAuthData(true))

}

export const logoutTC = () => async (dispatch: Dispatch) => {

    await API.logout()

    dispatch(setLoginData({id: 0, email: '', login: ''}))

    dispatch(setAuthData(false))

}
