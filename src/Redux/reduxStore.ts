import {combineReducers, createStore, Store} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";

const rootReducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})

export type ReduxStoreType = ReturnType<typeof combineReducers>

export const reduxStore:Store & ReduxStoreType = createStore(rootReducers)

