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
    state:Store
    renderEntireTree:() => void
    addPostMessage:() => void
    onChangePostText:(newPostMessage:string) => void
    addMessageDialog:() => void
    onChangeDialogMessage:(message:string) => void
    subscribe:(observer:() => void) => void
}

export const store:StoreType = {
    state: {
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
        const newPostMessage:PostType = {message: this.state.profilePage.newPostText, avatarImg:'', likes:5, id:4}
        this.state.profilePage.posts.push(newPostMessage)
        this.state.profilePage.newPostText = ''
        this.renderEntireTree()
    },
    onChangePostText(newPostMessage:string){
        this.state.profilePage.newPostText = newPostMessage
        this.renderEntireTree()
    },
    addMessageDialog(){
        const newMessageItem: MessageItem = {id: 6, message:this.state.dialogsPage.newDialogMessage}
        this.state.dialogsPage.messages.push(newMessageItem)
        this.state.dialogsPage.newDialogMessage = ''
        console.log(this.state.dialogsPage.messages)
        this.renderEntireTree()
    },
    onChangeDialogMessage(message:string){
        this.state.dialogsPage.newDialogMessage = message
        this.renderEntireTree()
    },
    subscribe(observer:()=>void){
        this.renderEntireTree = observer
    }
}

// export const addPostMessage = () => {
//     const objPostMessage: PostType = {message: state.newPostsText, avatarImg: '', likes: 5, id: 4}
//     state.profilePage.push(objPostMessage)
//     state.newPostsText = ''
//     console.log(state.profilePage)
//     renderEntireTree()
// }

// export const onChangePostText = (postMessage:string) => {
//     state.newPostsText = postMessage
//     console.log('onChangeMessage', state.newPostsText)
//     renderEntireTree()
// }

// export const addMessageDialog = () => {
//     const objMessageItem: MessageItem = {id: 6, message:state.dialogsPage.newDialogMessage}
//     state.dialogsPage.messages.push(objMessageItem)
//     state.dialogsPage.newDialogMessage = ''
//     console.log(state.dialogsPage.messages)
//     renderEntireTree()
// }

// export const onChangeDialogMessage = (message:string) => {
//     state.dialogsPage.newDialogMessage = message
//     renderEntireTree()
// }

// export const subscribe = (observer:()=> void) => {
//     renderEntireTree = observer
// }


