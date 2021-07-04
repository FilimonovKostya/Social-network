import React, {useEffect} from 'react';
import {compose} from "redux";
import Login from "./Login";
import {AppStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import App from "../../App";
import { Redirect } from 'react-router-dom';
import WithAuthRedirect from "../../Hoc/WithAuthRedirect";

const LoginContainer = ({isAuth}: mapStatePropsType) => {

    if(isAuth) return <Redirect to={'/profile'}/>

    return <Login/>
};

type mapStatePropsType = {
    isAuth: boolean
}

const mapStateProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateProps)
)(LoginContainer);
