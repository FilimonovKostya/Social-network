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
    newDialogMessage:string
}
export type ProfilePage = {
    posts:PostType[]
    newPostText:string
}

export type Store = {
    profilePage: ProfilePage
    dialogsPage: DialogsPage
}

type StoreType = {
    _state:Store
    renderEntireTree:() => void
    addPostMessage:() => void
    onChangePostText:(newPostMessage:string) => void
    addMessageDialog:() => void
    onChangeDialogMessage:(message:string) => void
    subscribe:(observer:() => void) => void
    getState:() => Store
}

export const store:StoreType = {
    _state: {
        profilePage:{
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
            newPostText:''
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
            newDialogMessage:''
        },
    },
    renderEntireTree(){
        console.log('state was changed')
    },
    addPostMessage(){
        const newPostMessage:PostType = {message: this._state.profilePage.newPostText, avatarImg:'', likes:5, id:4}
        this._state.profilePage.posts.push(newPostMessage)
        this._state.profilePage.newPostText = ''
        this.renderEntireTree()
    },
    onChangePostText(newPostMessage:string){
        this._state.profilePage.newPostText = newPostMessage
        this.renderEntireTree()
    },
    addMessageDialog(){
        const newMessageItem: MessageItem = {id: 6, message:this._state.dialogsPage.newDialogMessage}
        this._state.dialogsPage.messages.push(newMessageItem)
        this._state.dialogsPage.newDialogMessage = ''
        console.log(this._state.dialogsPage.messages)
        this.renderEntireTree()
    },
    onChangeDialogMessage(message:string){
        this._state.dialogsPage.newDialogMessage = message
        this.renderEntireTree()
    },
    subscribe(observer:()=>void){
        this.renderEntireTree = observer
    },
    getState(){
       return this._state
    }
}

// @ts-ignore
window.store = store
