import style from "./MyPost.module.css";
import React, {ChangeEvent} from "react";
import {AddPostAC, ChangePostTextAC} from "../../../../../Redux/profileReducer";

type MyPostPropsType = {
    dispatch: (action: any) => void
    newPostsText: string
}
const MyPost = ({dispatch, newPostsText}: MyPostPropsType) => {

    const onAddPostMessage = () => dispatch(AddPostAC())
    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(ChangePostTextAC(e.currentTarget.value))

    return <>
        <h4>My posts</h4>
        <label className={style.formInputContainer}>
            <textarea className={style.formInput} id="word-count-input" value={newPostsText} onChange={onChangeText}/>
            <span className={style.formInputLabel}/>
            <button className={style.button} onClick={onAddPostMessage}>Send</button>
        </label>
    </>
}

export default MyPost
