import React from 'react';
import style from "./MyPosts.module.css";
import Post from "../Post/Post";
import MyPost from './MyPost/MyPost';

const MyPosts = () => {
    return <div className={style.myPosts}>
        <MyPost/>
        <Post message={'Chose React or Vue ?'} avatarImg={''} likes={2}/>
        <Post message={'React awesome library, in my opinion'} avatarImg={''} likes={100}/>
        <Post message={'No, Vanila Js is the best framework'} avatarImg={''} likes={-20}/>
    </div>
};

export default MyPosts;
