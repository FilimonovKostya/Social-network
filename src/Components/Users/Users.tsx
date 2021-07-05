import React from 'react';
import {ItemsType} from "../../Redux/usersReducer";
import style from './Users.module.css'
import UserCard from "./UserCard/UserCard";
import Paginator from "./Paginator/Paginator";

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

    const usersCard = items.map(el => <UserCard isDisabled={isDisabled} followTC={followTC} unFollowTC={unFollowTC} key={el.id} name={el.name}
                                                status={el.status} followed={el.followed} id={el.id} photos={el.photos as any}/>)

    return <div className={style.container}>
        <div className={style.pagination}>
            <Paginator totalCount={totalCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
        <div className={style.usersWrapper}>
            {usersCard}
        </div>
    </div>
};

export default Users;
