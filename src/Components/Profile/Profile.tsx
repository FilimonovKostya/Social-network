import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import Post from "./Posts/Post/Post";

const Profile = () => {
    return <main className={style.profile}>
        <ProfileInfo/>
        <Posts/>
        <Post/>
        <Post/>
    </main>
}


export default Profile
