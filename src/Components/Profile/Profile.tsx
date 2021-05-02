import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../Redux/store";
import MyPostsContainer from "./ProfileInfo/MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
}
const Profile = ({store}: ProfilePropsType) => {
    return <main className={style.profile}>
        <ProfileInfo/>
        <MyPostsContainer store={store}/>
    </main>
}


export default Profile
