import React from 'react';
import {ItemsType} from "../../Redux/usersReducer";
import style from './Users.module.css'
import UserCard from "./UserCard/UserCard";
import Paginator from "./Paginator/Paginator";

type UsersPropsType = {
    setCurrentPageAC: (currentPage: number) => void
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
    items: ItemsType[]
    currentPage: number
    totalCount: number
    isDisabled: boolean
}

const Users = ({items, currentPage, totalCount, setCurrentPageAC, isDisabled, followTC, unFollowTC}: UsersPropsType) => {

    const usersCard = items.map(el => <UserCard isDisabled={isDisabled} followTC={followTC} unFollowTC={unFollowTC} key={el.id} name={el.name}
                                                status={el.status} followed={el.followed} id={el.id} photos={el.photos as any}/>)

    return <div className={style.container}>
        <div className={style.pagination}>
            <Paginator totalCount={totalCount} currentPage={currentPage} setCurrentPage={setCurrentPageAC}/>
        </div>
        <div className={style.usersWrapper}>
            {usersCard}
        </div>
    </div>
};

export default Users;
