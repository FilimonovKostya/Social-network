import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {getAuthDataTC} from "../../Redux/authReducer";
import {compose} from "redux";

const HeaderContainer = ({login, getAuthDataTC}: MapDispatchToPropsType & MapStateToPropsType) => {

    useEffect(() => {
        getAuthDataTC()
    }, [])

    return <Header login={login}/>
}

type MapStateToPropsType = {
    login: string
}

type MapDispatchToPropsType = {
    getAuthDataTC: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.data.login
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getAuthDataTC})
)(HeaderContainer)
