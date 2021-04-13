import style from "./MyPost.module.css";
import React from "react";

const MyPost = () => {
    return <>
        <h4>My posts</h4>
        <label className={style.formInputContainer}>
            <textarea className={style.formInput} id="word-count-input"/>
            <span className={style.formInputLabel}/>
            <button className={style.button}>Send</button>
        </label>
    </>
}

export default MyPost
