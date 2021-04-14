import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";

export type PostType = {
    id: number
    message: string
    avatarImg: string
    likes: number
}
export type MessageItemType = {
    id: number
    message: string
}
export type DialogsItemsType = {
    id: number
    name: string
}

function App() {

    const posts: PostType[] = [
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
    ]
    const dialogs: DialogsItemsType[] = [{
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
    },]
    const messages: MessageItemType[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Do you like React.JS ?'},
        {id: 3, message: 'What do you think about Vue?'},
        {id: 4, message: 'Do you heard about Vanila JS ?'},
        {id: 5, message: 'React awesome!!'}
    ]

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-content'}>
                <Route path={'/profile'} render={() => <Profile posts={posts}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
            </div>
        </div>
    );
}

export default App;
