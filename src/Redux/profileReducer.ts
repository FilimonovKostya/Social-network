import {AddMessageActionType, ChangeMessageActionType} from "./dialogsReducer";
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
    newPostText: string
    userProfile: UserProfileType | null
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type ChangePostTextActionType = {
    type: 'CHANGE-POST-TEXT',
    newPostMessage: string
}

export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE',
    userProfile: UserProfileType
}

type ActionType = AddPostActionType | ChangePostTextActionType | AddMessageActionType | ChangeMessageActionType | SetUserProfileActionType

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
    newPostText: '',
    userProfile: null
}

export const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        case 'ADD-POST':
            const newPostMessage: PostType = {message: state.newPostText, avatarImg: '', likes: 5, id: 4}
            return {
                ...state,
                posts: [...state.posts, newPostMessage],
                newPostText: ''
            }

        case 'CHANGE-POST-TEXT':
            return {
                ...state,
                newPostText: action.newPostMessage
            }

        case "SET-USER-PROFILE":
            return {
                ...state,
                userProfile: action.userProfile
            }

        default:
            return state
    }
}

export const AddPostAC = (): AddPostActionType => ({type: 'ADD-POST'})
export const ChangePostTextAC = (newPostMessage: string): ChangePostTextActionType => ({type: 'CHANGE-POST-TEXT', newPostMessage})
export const SetUserProfile = (userProfile: UserProfileType): SetUserProfileActionType => ({type: "SET-USER-PROFILE", userProfile})

export const getUsersTC = (userId:string) => (dispatch: Dispatch) => {
    API.setUsers(userId)
        .then(res => {
            dispatch(SetUserProfile(res))
        })
}
