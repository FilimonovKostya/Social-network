import React from 'react';
import style from "./MyPosts.module.css";
import Post from "../Post/Post";
import MyPost from './MyPost/MyPost';
import {PostType} from "../../../../Redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    addPost:(postMessage:string) => void
}
const MyPosts = ({posts, addPost}:MyPostsPropsType) => {

    const postsElements = posts.map((el) => <Post key={el.id} message={el.message} avatarImg={el.avatarImg} likes={el.likes}/>)

    return <div className={style.myPosts}>
        <MyPost addPost={addPost}/>
        {postsElements}
    </div>
};

export default MyPosts;
