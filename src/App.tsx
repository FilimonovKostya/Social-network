import React from 'react';
import './App.css';
import Navbar from "./Components/Nav/Navbar";
import {Route} from 'react-router-dom';
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersAPIContainer from "./Components/Users/UsersAPIContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login";


function App() {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-content'}>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                <Route path={'/users'} render={() => <UsersAPIContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
