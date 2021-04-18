import style from "./MyPost.module.css";
import React from "react";

const MyPost = () => {

    const textAreaValue = React.createRef<HTMLTextAreaElement>()
    const onChangeTextArea = () => alert(textAreaValue.current?.value)

    return <>
        <h4>My posts</h4>
        <label className={style.formInputContainer}>
            <textarea className={style.formInput} id="word-count-input" ref={textAreaValue} />
            <span className={style.formInputLabel}/>
            <button className={style.button} onClick={onChangeTextArea}>Send</button>
        </label>
    </>
}

export default MyPost
