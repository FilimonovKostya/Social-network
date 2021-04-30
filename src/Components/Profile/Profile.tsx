import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./ProfileInfo/MyPosts/MyPosts";
import {PostType} from "../../Redux/state";

type ProfilePropsType = {
    posts: PostType[]
    addPost:() => void
    onChangePostText: (postMessage: string) => void
    newPostsText:string
}
const Profile = ({posts,addPost, onChangePostText, newPostsText}:ProfilePropsType) => {
    return <main className={style.profile}>
        <ProfileInfo/>
        <MyPosts posts={posts} addPost={addPost} onChangePostText={onChangePostText} newPostsText={newPostsText}/>
    </main>
}


export default Profile
