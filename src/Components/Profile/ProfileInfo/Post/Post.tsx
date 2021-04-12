import React from 'react';
import style from './Post.module.css'

type PostPropsType = {
    message: string
    avatarImg: string
    likes: number
}

const Post = ({message, avatarImg, likes}: PostPropsType) => {
    return <div className={style.wrapper}>
        <img className={style.avatar} src="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/celebrity-matrix-morpheus-256.png" alt=""/>
        <p>{message}</p>
    </div>
};

export default Post;
