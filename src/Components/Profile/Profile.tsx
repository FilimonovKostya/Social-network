import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./ProfileInfo/MyPosts/MyPostsContainer";
import {ContactsType, UserProfileType} from "../../Redux/profileReducer";
import { updateProfile } from "../../Api/api";

type UserProfilePropsType = {
    userProfile: UserProfileType
    status: string
    changeStatus: (status: string) => void
    updatePhoto: (photos: File) => void
    updateProfile: (contacts: updateProfile) => void
}

const Profile = ({userProfile, updateProfile, status, changeStatus, updatePhoto}: UserProfilePropsType) => {

    return <main className={style.profile}>
        <ProfileInfo updateProfile={updateProfile} userProfile={userProfile} changeStatus={changeStatus} status={status} updatePhoto={updatePhoto}/>
        <MyPostsContainer/>
    </main>
}


export default Profile
