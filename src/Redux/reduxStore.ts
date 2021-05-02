import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const reduxStore = createStore(rootReducer)

