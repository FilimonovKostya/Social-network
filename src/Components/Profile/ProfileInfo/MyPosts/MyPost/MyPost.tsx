import style from "./MyPost.module.css";
import React from "react";
import {useForm} from "react-hook-form";

type MyPostPropsType = {
    addPostMessage: (message:string) => void
}
const MyPost = ({addPostMessage}: MyPostPropsType) => {
    const {register, handleSubmit,} = useForm<{ textarea: string }>();
    const onSubmit = handleSubmit((data) => {
        addPostMessage(data.textarea)
    })


    return <>
        <h4>My posts</h4>
        <label className={style.formInputContainer}>
            <textarea className={style.formInput} id="word-count-input" {...register('textarea')}/>
            <span className={style.formInputLabel}/>
            <button className={style.button} onClick={onSubmit}>Send</button>
        </label>
    </>
}

export default MyPost
