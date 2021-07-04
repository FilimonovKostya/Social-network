import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from 'redux-thunk';
import {appReducer} from "./appReducer";


const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app:appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk))

