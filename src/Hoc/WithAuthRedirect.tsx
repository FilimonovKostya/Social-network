import React, {ComponentType} from "react";
import {AppStateType} from "../Redux/reduxStore";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        const {isAuth, ...restProps} = props

        if (!props.isAuth) return <Navigate to={'/login'}/>

        return <Component {...restProps as T} />
    }

    return connect(mapStateToProps)(RedirectComponent)
}

export default WithAuthRedirect
