import style from "./MyPost.module.css";
import React from "react";

type MyPostPropsType = {
    addPost:(postMessage:string) => void
}
const MyPost = ({addPost}:MyPostPropsType) => {

    const textAreaValue = React.createRef<HTMLTextAreaElement>()

    const onAddPostMessage = () => textAreaValue.current && addPost(textAreaValue.current.value)

    return <>
        <h4>My posts</h4>
        <label className={style.formInputContainer}>
            <textarea className={style.formInput} id="word-count-input" ref={textAreaValue} />
            <span className={style.formInputLabel}/>
            <button className={style.button} onClick={onAddPostMessage}>Send</button>
        </label>
    </>
}

export default MyPost
