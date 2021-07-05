import React, {useEffect, useState} from 'react';
import {ItemsType, setDisabledButton, UsersType} from "../../Redux/usersReducer";
import style from './Users.module.css'
import axios from "axios";
import {NavLink} from 'react-router-dom';
import {API} from '../../Api/api';
import UserCard from "./UserCard/UserCard";

type UsersPropsType = {
    items: ItemsType[]
    currentPage: number
    totalCount: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    isDisabled: boolean
    setDisabledButton: (isDisabled: boolean) => void
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
}

const Users = ({items, follow, unFollow, currentPage, totalCount, setCurrentPage, isDisabled, setDisabledButton, followTC, unFollowTC}: UsersPropsType) => {

    const pages = []
    for (let i = 1; i <= totalCount; i++) {
        pages.push(i)
    }

    const usersCard = items.map(el => <UserCard isDisabled={isDisabled} followTC={followTC} unFollowTC={unFollowTC} key={el.id} name={el.name}
                                                status={el.status} followed={el.followed} id={el.id} photos={el.photos as any}/>)

    return <div className={style.container}>
        <div className={style.pagination}> {
            pages.map((el, index) => <span className={el === currentPage ? style.active : ''}
                                           key={el}
                                           onClick={() => setCurrentPage(el)}>{el}</span>)
        }
        </div>
        <div className={style.usersWrapper}>
            {usersCard}
        </div>
    </div>
};

export default Users;
