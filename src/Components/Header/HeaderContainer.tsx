import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {getAuthDataTC, logoutTC} from "../../Redux/authReducer";
import {compose} from "redux";

const HeaderContainer = ({login, getAuthDataTC, logoutTC}: MapDispatchToPropsType & MapStateToPropsType) => {

    useEffect(() => {
        getAuthDataTC()
    }, [])

    return <Header logoutTC={logoutTC} login={login}/>
}

type MapStateToPropsType = {
    login: string
}

type MapDispatchToPropsType = {
    getAuthDataTC: () => void
    logoutTC:(isAuth:boolean) => void

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.data.login
    }
}


export default compose<React.ComponentType>(

    connect(mapStateToProps, {getAuthDataTC, logoutTC})
)(HeaderContainer)
