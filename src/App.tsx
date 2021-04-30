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
import {State} from "./Redux/state";

type StatePropsType = {
    state: State
    addPost:(postMessage:string) => void
    addMessageDialog:(message:string) => void
}

function App({state, addPost, addMessageDialog}: StatePropsType) {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-content'}>
                <Route path={'/profile'} render={() => <Profile posts={state.profilePage} addPost={addPost}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogsData={state.dialogsPage} addMessageDialog={addMessageDialog}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
            </div>
        </div>
    );
}

export default App;
