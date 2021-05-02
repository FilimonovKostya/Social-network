import {AddMessageActionType, ChangeMessageActionType} from "./dialogsReducer";

export type PostType = {
    id: number
    message: string
    avatarImg: string
    likes: number
}

type InitialStateType = {
    posts: PostType[]
    newPostText: string
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ChangePostTextActionType = {
    type: 'CHANGE-POST-TEXT',
    newPostMessage: string
}

type ActionType = AddPostActionType | ChangePostTextActionType | AddMessageActionType | ChangeMessageActionType

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
    newPostText: ''
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
        default:
            return state
    }
}

export const AddPostAC = (): AddPostActionType => ({type: 'ADD-POST'})
export const ChangePostTextAC = (newPostMessage: string): ChangePostTextActionType => ({type: 'CHANGE-POST-TEXT', newPostMessage})
