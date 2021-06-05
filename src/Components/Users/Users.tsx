import React, {useEffect, useState} from 'react';
import {ItemsType, UsersType} from "../../Redux/usersReducer";
import style from './Users.module.css'
import axios from "axios";
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    items: ItemsType[]
    currentPage: number
    totalCount: number
    error: string[] | null
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: ItemsType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    pageSize: number
}

const Users = ({items, follow, unFollow, setUsers, currentPage, error, totalCount, setCurrentPage, setTotalCount, pageSize}: UsersPropsType) => {

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
                <div className={style.avatarIcon} key={el.id}><NavLink to={'profile/2'}> <img
                    src={el.photos.large != null ? el.photos.large : 'https://toppng.com/uploads/preview/batman-icon-jira-avatar-11562897771zvwv8r510z.png'}
                    alt=""/> </NavLink>
                    <div className={style.info}>
                        <p>{el.name}</p>
                        <p>{el.status}</p>
                    </div>
                </div>
                <div className={style.btn}>
                    {el.followed ? <button onClick={() => unFollow(el.id)}> Follow</button> : <button onClick={() => follow(el.id)}> un follow</button>}
                </div>
            </>)
        }
    </div>
};

export default Users;
