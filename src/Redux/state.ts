import RenderEntireTree from "../renderEntireTree";

export type PostType = {
    id: number
    message: string
    avatarImg: string
    likes: number
}
export type MessageItem = {
    id: number
    message: string
}
export type DialogsItems = {
    id: number
    name: string
}
export type DialogsPage = {
    dialogs: DialogsItems[]
    messages: MessageItem[]
}

export type State = {
    profilePage: PostType[]
    dialogsPage: DialogsPage
}

export const state: State = {
    profilePage: [
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
    dialogsPage: {
        dialogs: [{
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
        ]
    }
}

export const addPostMessage = (postMessage: string) => {
    const objPostMessage: PostType = {message: postMessage, avatarImg: '', likes: 5, id: 4}
    state.profilePage.push(objPostMessage)
    console.log(state.profilePage)
    RenderEntireTree(state)
}

export const addMessageDialog = (message: string) => {
    const objMessageItem: MessageItem = {id: 6, message}
    state.dialogsPage.messages.push(objMessageItem)
    console.log(state.dialogsPage.messages)
    RenderEntireTree(state)
}
