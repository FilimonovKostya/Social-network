import {Dispatch} from "redux";
import {API} from "../Api/api";

export type PostType = {
    id: number
    message: string
    avatarImg: string
    likes: number
}

export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

type InitialStateType = {
    posts: PostType[]
    userProfile: UserProfileType | null
    status: string
}

export type AddPostActionType = {
    type: 'ADD-POST'
    message: string
}

export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE',
    userProfile: UserProfileType
}

export type SetStatusActionType = {
    type: 'SET-STATUS',
    status: string
}

type ActionType = AddPostActionType | SetUserProfileActionType | SetStatusActionType

const initialState: InitialStateType = {
    posts: [
        {
            message: 'Chose React or Vue ?',
            avatarImg: '',
            likes: 2,
            id: 1,
        },
        {
            message: 'React awesome library, in my opinion',
            avatarImg: '',
            likes: 100,
            id: 2,
        },
        {
            message: 'No, Vanila Js is the best framework',
            avatarImg: '',
            likes: -20,
            id: 3,
        },
    ],

    userProfile: null,
    status: 'Samurai'
}

export const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        case 'ADD-POST':
            const newPostMessage: PostType = {message: action.message, avatarImg: '', likes: 5, id: 4}
            return {
                ...state,
                posts: [...state.posts, newPostMessage],
            }

        case "SET-USER-PROFILE":
            return {
                ...state,
                userProfile: action.userProfile
            }

        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}

export const addPostAC = (message: string): AddPostActionType => ({type: 'ADD-POST', message})
export const setUserProfileAC = (userProfile: UserProfileType): SetUserProfileActionType => ({type: "SET-USER-PROFILE", userProfile})
export const setStatusAC = (status: string): SetStatusActionType => ({type: "SET-STATUS", status})

export const getUsersTC = (userId: string) => async (dispatch: Dispatch) => {

    const res = await API.setUsers(userId)

    dispatch(setUserProfileAC(res))

}

export const getStatusTC = (userId: number) => async (dispatch: Dispatch) => {

    const res = await API.getStatus(userId)

    dispatch(setStatusAC(res.data))

}

export const changeStatusTC = (status: string) => async (dispatch: Dispatch) => {

    const res = await API.changeStatus(status)

    if (res.data.resultCode === 0) {

        dispatch(setStatusAC(status))

    }

}

