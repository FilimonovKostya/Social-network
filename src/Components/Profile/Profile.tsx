import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./ProfileInfo/MyPosts/MyPostsContainer";


const Profile = () => {
    return <main className={style.profile}>
        <ProfileInfo/>
        <MyPostsContainer/>
    </main>
}


export default Profile
