import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUsersTC, UserProfileType} from "../../Redux/profileReducer";
import {AppStateType} from "../../Redux/reduxStore";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import WithAuthRedirect from "../../Hoc/WithAuthRedirect";


const ProfileContainer: React.FC<PropsType> = ({userProfile, getUsersTC, match, auth, ...restProps}) => {

    let userId = !match.params.userId ? match.params.userId = '2' : match.params.userId

    useEffect(() => {
        getUsersTC(userId)
    }, [])

    console.log('Auytg', auth)

    return <Profile userProfile={userProfile} {...restProps}/>
}

type MapStateToPropsType = {
    userProfile: UserProfileType | null
    auth: boolean
}

type MapDispatchToPropsType = {
    getUsersTC: (userId: string) => void
}

type ParamsType = {
    userId: string
}

type CommonType = MapDispatchToPropsType & MapStateToPropsType
type PropsType = RouteComponentProps<ParamsType> & CommonType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile,
        auth: state.auth.isAuth
    }
}

const WithUrlRouterContainerComponent = withRouter(ProfileContainer)

export default WithAuthRedirect(connect(mapStateToProps, {getUsersTC})(WithUrlRouterContainerComponent))

