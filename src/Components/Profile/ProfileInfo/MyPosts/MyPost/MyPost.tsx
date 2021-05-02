import style from "./MyPost.module.css";
import React, {ChangeEvent} from "react";

type MyPostPropsType = {
    addPostMessage: () => void
    changeText: (text: string) => void
    newPostsText: string
}
const MyPost = ({addPostMessage, changeText, newPostsText}: MyPostPropsType) => {

    const onAddPostMessage = () => addPostMessage()
    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => changeText(e.currentTarget.value)

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
