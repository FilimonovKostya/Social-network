import {AddPostActionType} from "./profileReducer";

export type MessageItem = {
    id: number
    message: string
}
export type DialogsItems = {
    id: number
    name: string
}
export type DialogPageStateType = {
    dialogs: DialogsItems[]
    messages: MessageItem[]
}


export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    message: string
}

type ActionType = AddMessageActionType | AddPostActionType

const initialState: DialogPageStateType = {
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
}

export const dialogsReducer = (state = initialState, action: ActionType): DialogPageStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessageItem: MessageItem = {id: 6, message: action.message}
            return {
                ...state,
                messages: [...state.messages, newMessageItem],
            }
        }
        default:
            return state
    }
}

export const AddMessageAC = (message: string): AddMessageActionType => ({type: 'ADD-MESSAGE', message})
