import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./ProfileInfo/MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/profileReducer";

type UserProfilePropsType = {
    userProfile: UserProfileType | null
}

const Profile = ({userProfile}: UserProfilePropsType) => {
    return <main className={style.profile}>
        <ProfileInfo userProfile={userProfile}/>
        <MyPostsContainer/>
    </main>
}


export default Profile
