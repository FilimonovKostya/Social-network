import {AddPostActionType, ChangePostTextActionType, PostType, profileReducer} from "./profileReducer";
import {AddMessageActionType, ChangeMessageActionType, DialogsItems, dialogsReducer, MessageItem} from "./dialogsReducer";


export type DialogsPage = {
    dialogs: DialogsItems[]
    messages: MessageItem[]
    newDialogMessage: string
}
export type ProfilePage = {
    posts: PostType[]
    newPostText: string
}

export type Store = {
    profilePage: ProfilePage
    dialogsPage: DialogsPage
}


type StoreType = {
    _state: Store
    renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => Store
    dispatch: (action: AddPostActionType | ChangePostTextActionType | AddMessageActionType | ChangeMessageActionType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
        },
    },
    renderEntireTree() {
        console.log('state was changed')
    },
    subscribe(observer: () => void) {
        this.renderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    }
}

// @ts-ignore
window.store = store
