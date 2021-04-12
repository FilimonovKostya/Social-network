import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./ProfileInfo/MyPosts/MyPosts";


const Profile = () => {
    return <main className={style.profile}>
        <ProfileInfo/>
        <MyPosts/>
    </main>
}


export default Profile
