import React from 'react';
import style from "./MyPosts.module.css";
import Post from "../Post/Post";
import MyPost from './MyPost/MyPost';
import {PostType} from "../../../../Redux/store";

type MyPostsPropsType = {
    posts: PostType[]
    addPost:() => void
    onChangePostText: (postMessage: string) => void
    newPostsText:string
}
const MyPosts = ({posts, addPost, onChangePostText, newPostsText}:MyPostsPropsType) => {

    const postsElements = posts.map((el) => <Post key={el.id} message={el.message} avatarImg={el.avatarImg} likes={el.likes}/>)

    return <div className={style.myPosts}>
        <MyPost addPost={addPost} onChangePostText={onChangePostText} newPostsText={newPostsText}/>
        {postsElements}
    </div>
};

export default MyPosts;
