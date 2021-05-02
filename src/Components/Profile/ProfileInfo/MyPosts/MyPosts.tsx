import React from 'react';
import style from "./MyPosts.module.css";
import Post from "../Post/Post";
import {PostType} from "../../../../Redux/profileReducer";
import {CommonTypeAction, store} from "../../../../Redux/store";
import MyPostContainer from "./MyPost/MyPostContainer";

type MyPostsPropsType = {
    posts: PostType[]
    dispatch: (action: CommonTypeAction) => void
    newPostsText: string
}
const MyPosts = ({posts}: MyPostsPropsType) => {

    const postsElements = posts.map((el) => <Post key={el.id} message={el.message} avatarImg={el.avatarImg} likes={el.likes}/>)

    return <div className={style.myPosts}>
        <MyPostContainer store={store}/>
        {postsElements}
    </div>
};

export default MyPosts;
