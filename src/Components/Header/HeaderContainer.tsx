import React, {useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {InitialStateType, setLoginData} from "../../Redux/authReducer";

const HeaderContainer = ({setLoginData, login}:MapDispatchToPropsType & MapStateToPropsType ) => {

    useEffect(() => {
        axios.get<InitialStateType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((response) => {
                if (response.data.resultCode === 0 ) {
                    setLoginData(response.data.data)
                } else {
                    setLoginData({id:0, email: '', login: ''})
                }
                console.log('response', response)
            })
            .catch((error) => {
                console.log('error', error)
            })
    }, [])

    return <Header login={login}/>
}

type MapStateToPropsType = {
    login: string
}

type MapDispatchToPropsType = {
    setLoginData:(data:{id: number, email:string, login:string }) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {setLoginData})(HeaderContainer)
