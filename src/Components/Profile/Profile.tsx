import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./ProfileInfo/MyPosts/MyPosts";
import {PostType} from "../../Redux/state";

type ProfilePropsType = {
    posts: PostType[]
}
const Profile = ({posts}:ProfilePropsType) => {
    return <main className={style.profile}>
        <ProfileInfo/>
        <MyPosts posts={posts}/>
    </main>
}


export default Profile
