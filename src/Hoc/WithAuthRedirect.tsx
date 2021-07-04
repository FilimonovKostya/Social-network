import React, {ComponentType} from "react";
import {AppStateType} from "../Redux/reduxStore";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

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
        const { isAuth, ...restProps } = props

        if(!props.isAuth) return  <Redirect to={'/login'}  />

        return <Component {...restProps as T} />
    }

    return connect(mapStateToProps)(RedirectComponent)
}

export default WithAuthRedirect
