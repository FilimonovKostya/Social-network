import React from "react";
import style from './Profile.module.css'

const Profile = () => {
    return <main className={style.profile}>
        <div><img
            src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg'
            alt="bg"/></div>
        <div>Ava + des</div>
        <div>My posts</div>
        <div>New post</div>
        <div>post 1</div>
        <div>post 2</div>
    </main>
}
export default Profile
