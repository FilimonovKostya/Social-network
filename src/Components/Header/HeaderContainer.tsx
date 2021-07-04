import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {getAuthDataTC, logoutTC} from "../../Redux/authReducer";
import {compose} from "redux";

const HeaderContainer = ({login, logoutTC, isAuth, getAuthDataTC}: MapDispatchToPropsType & MapStateToPropsType) => {

    useEffect(() =>{
        getAuthDataTC()
    })

    return <Header isAuth={isAuth} logoutTC={logoutTC} login={login}/>
}

type MapStateToPropsType = {
    login: string
    isAuth: boolean

}

type MapDispatchToPropsType = {
    logoutTC:(isAuth:boolean) => void
    getAuthDataTC:() => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth
    }
}


export default compose<React.ComponentType>(

    connect(mapStateToProps, {logoutTC,getAuthDataTC})
)(HeaderContainer)
