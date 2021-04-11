import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = () => {
    return <main className={style.profile}>
        <ProfileInfo/>
        <Posts/>
    </main>
}

export default Profile
