import {AddPostActionType, ChangePostTextActionType} from "./profileReducer";

export type MessageItem = {
    id: number
    message: string
}
export type DialogsItems = {
    id: number
    name: string
}
type InitialStateType = {
    dialogs: DialogsItems[]
    messages: MessageItem[]
    newDialogMessage: string
}


export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
export type ChangeMessageActionType = {
    type: 'CHANGE-MESSAGE-TEXT'
    message: string
}

type ActionType = AddMessageActionType | ChangeMessageActionType | AddPostActionType | ChangePostTextActionType

const initialState: InitialStateType = {
    dialogs: [
        {
            id: 1,
            name: 'Batman'
        }, {
            id: 2,
            name: 'Pavel Durov'
        }, {
            id: 3,
            name: 'Ilon Mask'
        }, {
            id: 4,
            name: 'Den Abramov'
        }, {
            id: 5,
            name: 'Filimonov Kostya'
        },],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Do you like React.JS ?'},
        {id: 3, message: 'What do you think about Vue?'},
        {id: 4, message: 'Do you heard about Vanila JS ?'},
        {id: 5, message: 'React awesome!!'}
    ],
    newDialogMessage: ''
}

export const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const copyState = {...state}
            const newMessageItem: MessageItem = {id: 6, message: copyState.newDialogMessage}
            copyState.messages = [...state.messages]
            copyState.messages.push(newMessageItem)
            copyState.newDialogMessage = ''
            return copyState
        }
        case 'CHANGE-MESSAGE-TEXT': {
            const copyState = {...state}
            copyState.newDialogMessage = action.message
            return copyState
        }
        default:
            return state
    }
}

export const AddMessageAC = (): AddMessageActionType => ({type: 'ADD-MESSAGE'})
export const ChangeMessageAC = (message: string): ChangeMessageActionType => ({type: "CHANGE-MESSAGE-TEXT", message})
