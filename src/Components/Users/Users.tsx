import React, {useEffect, useState} from 'react';
import {UsersType} from "../../Redux/usersReducer";
import style from './Users.module.css'
import axios from "axios";

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

const Users = ({users, follow, unFollow, setUsers}: UsersPropsType) => {
    const [pagination, setPagination] = useState([1])
    const [counterPagination, setCounterPagination] = useState(1)

    useEffect(() => {

        axios.get<{ items: UsersType[] }>(`https://social-network.samuraijs.com/api/1.0/users?page=${counterPagination}`)
            .then((response) => {
                setUsers(response.data.items)
                console.log(response.data)
                let pages = []
                debugger
                // @ts-ignore
                for (let i = 0; i <= response.data.totalCount; i++) {
                    pages[i] = i
                    console.log({i})
                }
                console.log(pages)
                setPagination(pages)
            })
    }, [counterPagination])

    return <div className={style.container}>
        {pagination.map((el, index) => <span key={index} onClick={() => setCounterPagination(index)}>{el}</span>)}
        {
            users.map(el => <>
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
