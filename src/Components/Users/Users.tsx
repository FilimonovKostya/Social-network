import React, {useEffect, useState} from 'react';
import {ItemsType, UsersType} from "../../Redux/usersReducer";
import style from './Users.module.css'
import axios from "axios";

type UsersPropsType = {
    items: ItemsType[]
    currentPage: number
    totalCount: number
    error: string[] | null
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: ItemsType[]) => void
    setCurrentPageAC: (currentPage: number) => void
    setTotalCountAC: (totalCount: number) => void
    pageSize: number
    setPageSize: (pageSize: number) => void
}

const Users = ({items, follow, unFollow, setUsers, currentPage, error, totalCount, setCurrentPageAC, setTotalCountAC, pageSize , setPageSize}: UsersPropsType) => {
    const pages = []

    useEffect(() => {

        axios.get<UsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                setTotalCountAC(Math.ceil(response.data.totalCount / pageSize))

                setCurrentPageAC(currentPage)
                setPageSize(pageSize)
                setUsers(response.data.items)

            })
            .catch((error) => {
                console.log('error', error)
            })
    }, [currentPage, totalCount])

    for (let i = 1; i <= totalCount; i++) {
        pages.push(i)
    }


    return <div className={style.container}>
        <div className={style.pagination}> {
            pages.map((el, index) => <span className={el === currentPage ? style.active : ''}
                                                key={el}
                                                onClick={() => setCurrentPageAC(el)}>{el}</span>)
        }
        </div>
        {
            items.map(el => <>
                <div className={style.avatarIcon} key={el.id}><img
                    src={el.photos.large != null ? el.photos.large : 'https://toppng.com/uploads/preview/batman-icon-jira-avatar-11562897771zvwv8r510z.png'}
                    alt=""/>
                    <div className={style.info}>
                        <p>{el.name}</p>
                        <p>{el.status}</p>
                    </div>
                </div>
                <div className={style.btn}>
                    {el.followed ? <button onClick={() => follow(el.id)}> Follow</button> : <button onClick={() => unFollow(el.id)}> un follow</button>}
                </div>
            </>)
        }
    </div>
};

export default Users;
