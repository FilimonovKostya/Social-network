import React from 'react';
import MyPost from "./MyPost";
import {AddPostAC, ChangePostTextAC} from "../../../../../Redux/profileReducer";
import {StoreType} from "../../../../../Redux/store";

type MyPostContainerPropsType = {
    store: StoreType
}

const MyPostContainer = ({store}: MyPostContainerPropsType) => {

    const state = store.getState()
    const onAddPostMessage = () => store.dispatch(AddPostAC())
    const onChangeText = (text: string) => store.dispatch(ChangePostTextAC(text))

    return <MyPost changeText={onChangeText} addPostMessage={onAddPostMessage} newPostsText={state.profilePage.newPostText}/>
};

export default MyPostContainer;
