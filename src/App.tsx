import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Nav/Navbar";
import {Route} from 'react-router-dom';
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import UsersAPIContainer from "./Components/Users/UsersAPIContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {AppStateType} from "./Redux/reduxStore";
import {compose} from "redux";
import {connect} from "react-redux";
import {setInitializeAppTC} from "./Redux/appReducer";
import Preloader from "./Components/Preloader/Preloader";
import LoginContainer from "./Components/Login/LoginContainer";
import WithLazyLoading from "./Hoc/WithLazyLoading"


type mapStatePropsType = {
    isInitialize: boolean
}

type mapDispatchToPropsType = {
    setInitializeAppTC: () => void
}

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));



function App({isInitialize, setInitializeAppTC}: mapDispatchToPropsType & mapStatePropsType) {

    useEffect(() => {
        setInitializeAppTC()
    }, [])

    if (!isInitialize) return <Preloader/>

    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-content'}>
                <Route path={'/profile/:userId?'} render={() => WithLazyLoading(ProfileContainer)}/>
                <Route path={'/dialogs'} render={() => WithLazyLoading(DialogsContainer )}/>
                <Route path={'/users'} render={() => <UsersAPIContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route exact path={'/login'} render={() => <LoginContainer/>}/>
            </div>
        </div>
    );
}

const mapStateProps = (state: AppStateType): mapStatePropsType => {
    return {
        isInitialize: state.app.isInitialize,
    }
}

export default compose(
    connect(mapStateProps, {setInitializeAppTC})
)(App);
