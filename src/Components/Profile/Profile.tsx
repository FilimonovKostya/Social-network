import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./ProfileInfo/MyPosts/MyPosts";
import {PostType} from "../../Redux/store";

type ProfilePropsType = {
    posts: PostType[]
    dispatch: (action: any) => void
    newPostsText:string
}
const Profile = ({posts,dispatch, newPostsText}:ProfilePropsType) => {
    return <main className={style.profile}>
        <ProfileInfo/>
        <MyPosts posts={posts} dispatch={dispatch} newPostsText={newPostsText}/>
    </main>
}


export default Profile
