import style from "./MyPost.module.css";
import React, {ChangeEvent} from "react";

type MyPostPropsType = {
    addPost: () => void
    onChangePostText: (postMessage: string) => void
    newPostsText: string
}
const MyPost = ({addPost, onChangePostText, newPostsText}: MyPostPropsType) => {

    const onAddPostMessage = () =>  addPost()
    const onChangeText = (e:ChangeEvent<HTMLTextAreaElement>) =>  onChangePostText(e.currentTarget.value)

    console.log('value', newPostsText)

    return <>
        <h4>My posts</h4>
        <label className={style.formInputContainer}>
            <textarea className={style.formInput} id="word-count-input"  value={newPostsText} onChange={onChangeText}/>
            <span className={style.formInputLabel}/>
            <button className={style.button} onClick={onAddPostMessage}>Send</button>
        </label>
    </>
}

export default MyPost
