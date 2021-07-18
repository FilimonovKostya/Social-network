import {Dispatch} from "redux";
import {API, updateProfile} from "../Api/api";

export type PostType = {
    id: number
    message: string
    avatarImg: string
    likes: number
}
export type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

export type SocialMediaType =
    'facebook'
    | 'website'
    | 'vk'
    | 'twitter'
    | 'instagram'
    | 'youtube'
    | 'github'
    | 'mainLink'

export type UserProfileType = {
    aboutMe: string,
    contacts: ContactsType,
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
    userProfile: UserProfileType
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

export type UpdatePhotoActionType = {
    type: 'UPDATE-PHOTO',
    photos: { small: string, large: string }
}

export type UpdateProfileActionType = {
    type: 'UPDATE-PROFILE',
    contacts: updateProfile
}

type ActionType =
    AddPostActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | UpdatePhotoActionType
    | UpdateProfileActionType

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

    userProfile: {} as UserProfileType,
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

        case "UPDATE-PHOTO":
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos} as UserProfileType
            }

        case "UPDATE-PROFILE":
            return {
                ...state,
                userProfile: {...state.userProfile, contacts: {...action.contacts.contacts}}
            }

        default:
            return state
    }
}

export const addPostAC = (message: string): AddPostActionType => ({type: 'ADD-POST', message})
export const setUserProfileAC = (userProfile: UserProfileType): SetUserProfileActionType => ({
    type: "SET-USER-PROFILE",
    userProfile
})
export const setStatusAC = (status: string): SetStatusActionType => ({type: "SET-STATUS", status})
export const updatePhotoAC = (photos: { small: string, large: string }): UpdatePhotoActionType => ({
    type: "UPDATE-PHOTO",
    photos
})
export const updateProfileAC = (contacts: updateProfile): UpdateProfileActionType => ({
    type: "UPDATE-PROFILE",
    contacts
})

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

export const updatePhotoTC = (photos: File) => async (dispatch: Dispatch) => {

    const res = await API.updatePhoto(photos)

    if (res.data.resultCode === 0) {
        console.log('res', res.data)
        dispatch(updatePhotoAC(res.data.data.photos))

    }
}

export const updateProfileTC = (contacts: updateProfile) => async (dispatch: Dispatch) => {

    const res = await API.updateProfile(contacts)

    if (res.data.resultCode === 0) {
        console.log('res in profile', res.data)
        dispatch(updateProfileAC({
            aboutMe: 'Test About me',
            fullName: 'Test Full Name',
            lookingForAJob: false,
            lookingForAJobDescription: 'test job',
            contacts: contacts.contacts
        }))

    }
}
