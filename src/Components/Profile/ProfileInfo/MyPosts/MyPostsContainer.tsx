import React from 'react';
import MyPosts from "./MyPosts";
import {StoreType} from "../../../../Redux/store";

type MyPostsContainerPropsType = {
    store:StoreType
}

const MyPostsContainer = ({store}:MyPostsContainerPropsType) => {

    const state = store.getState()
    const posts = state.profilePage.posts
    const newPostText = state.profilePage.newPostText
    const dispatch = store.dispatch

    return <MyPosts posts={posts} dispatch={dispatch} newPostsText={newPostText}   />
};

export default MyPostsContainer;
