import React from 'react';
import style from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = () => {
    return <div className={style.myPosts}>
        <h4>My posts</h4>
        <label className={style.formInputContainer}>
            <textarea className={style.formInput} id="word-count-input"/>
            <span className={style.formInputLabel}/>
        </label>
        <button className={style.button}>Send</button>
        <Post message={'Chose React or Vue ?'} avatarImg={''} likes={2}/>
        <Post message={'React awesome library, in my opinion'} avatarImg={''} likes={100}/>
        <Post message={'No, Vanila Js is the best framework'} avatarImg={''} likes={-20}/>
    </div>
};

export default MyPosts;
