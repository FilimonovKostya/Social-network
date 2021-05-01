import React from 'react';
import style from "./MyPosts.module.css";
import Post from "../Post/Post";
import MyPost from './MyPost/MyPost';
import {ActionType, PostType} from "../../../../Redux/store";

type MyPostsPropsType = {
    posts: PostType[]
    dispatch: (action: ActionType) => void
    newPostsText:string
}
const MyPosts = ({posts, dispatch, newPostsText}:MyPostsPropsType) => {

    const postsElements = posts.map((el) => <Post key={el.id} message={el.message} avatarImg={el.avatarImg} likes={el.likes}/>)

    return <div className={style.myPosts}>
        <MyPost dispatch={dispatch} newPostsText={newPostsText}/>
        {postsElements}
    </div>
};

export default MyPosts;
