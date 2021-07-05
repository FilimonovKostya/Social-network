import {getAuthDataTC} from "./authReducer";

export type InitialStateType = {
    isInitialize: boolean
}

type ActionType = ReturnType<typeof initializedApp>

const initialState: InitialStateType = {isInitialize: false}

export const appReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        case "SET-INITIALIZE":
            return {
                ...state,
                isInitialize: true
            }

        default:
            return state
    }

}

export const initializedApp = () => ({type: 'SET-INITIALIZE'} as const)

export const setInitializeAppTC = () => async (dispatch: any) => {

    await dispatch(getAuthDataTC())

    dispatch(initializedApp())

}
