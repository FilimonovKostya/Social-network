import {Dispatch} from "redux";
import {API} from "../Api/api";

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

type ActionType = ReturnType<typeof setLoginData>

const initialState: InitialStateType = {isAuth: false, messages: [''], data: {id: 0, email: '', login: ''}, resultCode: 0}

export const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        case "SET-LOGIN":
            return {
                ...state,
                isAuth:true,
               data: {...action.data}
            }

        default:
            return state
    }
}

export const setLoginData = (data:{id: number, email:string, login:string }) => ({type: 'SET-LOGIN', data} as const)

export const getAuthDataTC = () => (dispatch: Dispatch) => {
    API.getAuth()
        .then( res => {
            if(res.data.resultCode === 0 ){
                dispatch(setLoginData(res.data.data))
            }
        })
}
