import React from 'react';
import {compose} from "redux";
import Login from "./Login";
import {AppStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import { Navigate } from 'react-router-dom';

type mapStatePropsType = {
    isAuth: boolean
}

const LoginContainer = ({isAuth}: mapStatePropsType) => {

    if (isAuth) return <Navigate to={'/profile'}/>

    return <Login/>
};

const mapStateProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateProps)
)(LoginContainer);
