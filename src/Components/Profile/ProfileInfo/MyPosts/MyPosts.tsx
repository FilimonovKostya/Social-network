import React from 'react';
import style from "./MyPosts.module.css";
import Post from "../Post/Post";
import {PostType} from "../../../../Redux/profileReducer";
import MyPostContainer from "./MyPost/MyPostContainer";

type MyPostsPropsType = {
    posts: PostType[]
}
const MyPosts = ({posts}: MyPostsPropsType) => {

    const postsElements = posts.map((el) => <Post key={el.id} message={el.message}/>)

    return <div className={style.myPosts}>
        <MyPostContainer/>
        {postsElements}
    </div>
};

export default MyPosts;
