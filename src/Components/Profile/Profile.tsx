import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./ProfileInfo/MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/profileReducer";

type UserProfilePropsType = {
    userProfile: UserProfileType
    status: string
    changeStatus: (status: string) => void
    updatePhoto: (photos:File) => void
}

const Profile = ({userProfile, status, changeStatus, updatePhoto}: UserProfilePropsType) => {

    return <main className={style.profile}>
        <ProfileInfo userProfile={userProfile} changeStatus={changeStatus} status={status} updatePhoto={updatePhoto}/>
        <MyPostsContainer/>
    </main>
}


export default Profile
