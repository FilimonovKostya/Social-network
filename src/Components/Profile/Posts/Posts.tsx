import React from 'react';
import style from './Posts.module.css'

const Posts = () => {
    return <div className={style.myPosts}>
        <h4>My posts</h4>
        <label className={style.formInputContainer}>
        <textarea className={style.formInput} id="word-count-input"/>
        <span className={style.formInputLabel}/>
    </label>
        <button className={style.button}>Send</button>
    </div>
};

export default Posts;
