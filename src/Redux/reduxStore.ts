import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";

const rootReducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})

type ReduxStoreType = ReturnType<typeof combineReducers>

export const reduxStore:ReduxStoreType = createStore(rootReducers)

