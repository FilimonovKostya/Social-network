import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Nav/Navbar";
import {Route, Routes} from 'react-router-dom';
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
import WithLazyLoading from "./Hoc/WithLazyLoading";
import ProfileContainer from "./Components/Profile/ProfileContainer";

type mapStatePropsType = {
    isInitialize: boolean
}

type mapDispatchToPropsType = {
    setInitializeAppTC: () => void
}

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));

// const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));


function App({isInitialize, setInitializeAppTC}: mapDispatchToPropsType & mapStatePropsType) {

    useEffect(() => setInitializeAppTC(), [])

    if (!isInitialize) return <Preloader/>

    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-content'}>
                <Routes>
                    <Route path="profile" element={<ProfileContainer/>}>
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>
                    <Route path={'/dialogs'} element={WithLazyLoading(DialogsContainer)}/>
                    <Route path={'/users'} element={<UsersAPIContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/login'} element={<LoginContainer/>}/>
                </Routes>
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
