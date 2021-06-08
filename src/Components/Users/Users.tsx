import React, {useEffect, useState} from 'react';
import {ItemsType, setDisabledButton, UsersType} from "../../Redux/usersReducer";
import style from './Users.module.css'
import axios from "axios";
import {NavLink} from 'react-router-dom';
import {API} from '../../Api/api';

type UsersPropsType = {
    items: ItemsType[]
    currentPage: number
    totalCount: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    isDisabled: boolean
    setDisabledButton:(isDisabled: boolean) => void
}

const Users = ({items, follow, unFollow, currentPage, totalCount, setCurrentPage, isDisabled, setDisabledButton}: UsersPropsType) => {

    const pages = []
    for (let i = 1; i <= totalCount; i++) {
        pages.push(i)
    }

    return <div className={style.container}>
        <div className={style.pagination}> {
            pages.map((el, index) => <span className={el === currentPage ? style.active : ''}
                                           key={el}
                                           onClick={() => setCurrentPage(el)}>{el}</span>)
        }
        </div>
        {
            items.map(el => <>
                <div className={style.avatarIcon} key={el.id}><NavLink to={`profile/${el.id}`}> <img
                    src={el.photos.large != null ? el.photos.large : 'https://toppng.com/uploads/preview/batman-icon-jira-avatar-11562897771zvwv8r510z.png'}
                    alt=""/> </NavLink>
                    <div className={style.info}>
                        <p>{el.name}</p>
                        <p>{el.status}</p>
                    </div>
                </div>
                <div className={style.btn}>
                    {
                        el.followed
                            ? <button disabled={isDisabled} onClick={() => {
                                setDisabledButton(true)
                                API.unFollow(el.id).then(() =>{
                                    setDisabledButton(false)
                                    unFollow(el.id)
                                })
                            }}> un follow</button>
                            : <button disabled={isDisabled}  onClick={() => {
                                setDisabledButton(true)
                                API.follow(el.id).then(() =>{
                                    setDisabledButton(false)
                                    unFollow(el.id)
                                })
                            }}> Follow</button>
                    }
                </div>
            </>)
        }
    </div>
};

export default Users;
