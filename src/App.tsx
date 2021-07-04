import React, {useEffect} from 'react';
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
import Login from "./Components/Login/Login";
import {AppStateType} from "./Redux/reduxStore";
import {compose} from "redux";
import {connect} from "react-redux";
import {setInitializeAppTC} from "./Redux/appReducer";
import Preloader from "./Components/Preloader/Preloader";
import LoginContainer from "./Components/Login/LoginContainer";


function App({isInitialize, setInitializeAppTC, isAuth}: mapDispatchToPropsType & mapStatePropsType) {


    useEffect(() => {
        setInitializeAppTC()
    }, [])

    if (!isInitialize) return <Preloader/>

    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-content'}>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/users'} render={() => <UsersAPIContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route exact path={'/login'} render={() => <LoginContainer />}/>
            </div>
        </div>
    );
}

type mapStatePropsType = {
    isInitialize: boolean
    isAuth:boolean
}

const mapStateProps = (state: AppStateType): mapStatePropsType => {
    return {
        isInitialize: state.app.isInitialize,
        isAuth:state.auth.isAuth
    }
}

type mapDispatchToPropsType = {
    setInitializeAppTC: () => void
}

export default compose(
    connect(mapStateProps, {setInitializeAppTC})
)(App);
