import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {SetUserProfile, UserProfileType} from "../../Redux/profileReducer";
import {AppStateType} from "../../Redux/reduxStore";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";


const ProfileContainer: React.FC<PropsType> = ({userProfile, SetUserProfile, match}) => {

    useEffect(() => {
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${match.params.userId}`)
            .then((res) => {
                console.log('res', res)
                SetUserProfile(res.data)
            })
            .catch((err) => {
                console.log('err', err)
            })
    }, [])

    return (<Profile userProfile={userProfile}/>)
}

type MapStateToPropsType = {
    userProfile: UserProfileType | null
}

type MapDispatchToPropsType = {
    SetUserProfile: (userProfile: UserProfileType) => void
}

type ParamsType = {
    userId: string
}

type CommonType = MapDispatchToPropsType & MapStateToPropsType
type PropsType = RouteComponentProps<ParamsType> & CommonType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

const WithUrlRouterContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {SetUserProfile})(WithUrlRouterContainerComponent)

