import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {SetUserProfile, UserProfileType} from "../../Redux/profileReducer";
import {AppStateType} from "../../Redux/reduxStore";


const ProfileContainer = ({userProfile, SetUserProfile}: MapStateToPropsType & MapDispatchToPropsType) => {

    useEffect(() => {
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then((res) => {
                console.log('res', res)
                SetUserProfile(res.data)
            })
            .catch((err) => {
                console.log('err', err)
            })
    }, [])

    return <Profile userProfile={userProfile}/>
}

type MapStateToPropsType = {
    userProfile: UserProfileType | null
}

type MapDispatchToPropsType = {
    SetUserProfile: (userProfile: UserProfileType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile
    }
}


export default connect(mapStateToProps, {SetUserProfile})(ProfileContainer)

