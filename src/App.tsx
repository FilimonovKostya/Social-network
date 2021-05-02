import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from 'react-router-dom';
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import {CommonTypeAction, StoreType} from "./Redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

type StatePropsType = {
    store: StoreType
    newPostsText: string
    dispatch: (action: CommonTypeAction) => void
}

function App({store}: StatePropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-content'}>
                <Route path={'/profile'}
                       render={() => <Profile store={store}/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer store={store}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
            </div>
        </div>
    );
}

export default App;
