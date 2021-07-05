import style from "./MyPost.module.css";
import React from "react";
import {useForm} from "react-hook-form";

type MyPostPropsType = {
    AddPostAC: (message: string) => void
}

const MyPost = ({AddPostAC}: MyPostPropsType) => {

    const {register, handleSubmit,} = useForm<{ textarea: string }>();
    const onSubmit = handleSubmit((data) => AddPostAC(data.textarea))

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
