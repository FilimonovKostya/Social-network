import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./ProfileInfo/MyPosts/MyPostsContainer";
import {StoreContext} from "../../StoreContext";


const Profile = () => {
    return <main className={style.profile}>
        <ProfileInfo/>
        <StoreContext.Consumer>
            {(store) => {
                return <MyPostsContainer store={store}/>
            }}
        </StoreContext.Consumer>
    </main>
}


export default Profile
