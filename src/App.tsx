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
import {CommonTypeAction, Store} from "./Redux/store";

type StatePropsType = {
    store: Store
    newPostsText: string
    newMessageDialog: string
    dispatch: (action: CommonTypeAction) => void
}

function App({store, newPostsText, dispatch, newMessageDialog}: StatePropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-content'}>
                <Route path={'/profile'}
                       render={() => <Profile posts={store.profilePage.posts} dispatch={dispatch}
                                              newPostsText={newPostsText}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogsData={store.dialogsPage} dispatch={dispatch} newMessageDialog={newMessageDialog}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
            </div>
        </div>
    );
}

export default App;
