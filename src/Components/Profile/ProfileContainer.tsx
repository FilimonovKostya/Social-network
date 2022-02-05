import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {changeStatusTC, getStatusTC, getUsersTC, updatePhotoTC, updateProfileTC, UserProfileType} from "../../Redux/profileReducer";
import {AppStateType} from "../../Redux/reduxStore";
import WithAuthRedirect from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";
import {updateProfile} from "../../Api/api";

type MapDispatchToPropsType = {
    getUsersTC: (userId: string) => void
    getStatusTC: (userId: number) => void
    changeStatusTC: (status: string) => void
    updatePhotoTC: (photos: File) => void
    updateProfileTC: (contacts: updateProfile) => void
}


type CommonType = MapDispatchToPropsType & MapStateToPropsType


type MapStateToPropsType = {
    userProfile: UserProfileType
    auth: boolean
    status: string
}

const ProfileContainer: React.FC<CommonType> = (props) => {
    const {
        userProfile,
        getUsersTC,
        updatePhotoTC,
        changeStatusTC,
        getStatusTC,
        auth,
        status,
        updateProfileTC,
        ...restProps
    } = props

    const match = {} as any

    let userId = !match.params.userId ? match.params.userId = '11899' : match.params.userId

    useEffect(() => {
        getUsersTC(userId)
        getStatusTC(+userId)
    }, [userId])


    return <Profile updatePhoto={updatePhotoTC} updateProfile={updateProfileTC} userProfile={userProfile}
                    changeStatus={changeStatusTC} status={status} {...restProps}/>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    console.log('userPrf', state.profilePage.userProfile.contacts)
    return {
        userProfile: state.profilePage.userProfile,
        auth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {getUsersTC, getStatusTC, changeStatusTC, updatePhotoTC, updateProfileTC}),
)(ProfileContainer)
