import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from 'react-router-dom';
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-content'}>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
            </div>
        </div>
    );
}

export default App;
