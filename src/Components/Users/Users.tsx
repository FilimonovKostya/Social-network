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
}

const Users = ({items, follow, unFollow, setUsers, currentPage, error , totalCount}: UsersPropsType) => {
    const [pagination, setPagination] = useState([1,2,3])
    const [counterPagination, setCounterPagination] = useState(1)

    useEffect(() => {
        debugger
        axios.get<UsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${counterPagination}`)
            .then((response) => {
                console.log('res', response.data)
                setUsers(response.data.items)
                console.log(response.data)
                let pages = []

                for (let i = 1; i <= response.data.items.length; i++) {
                    pages[i] = i
                    console.log({i})
                }
                console.log(pages)
                setPagination(pages)
            })
    }, [])

    return <div className={style.container}>
        {/*{pagination.map((el, index) => <span key={index} onClick={() => setCounterPagination(index)}>{el}</span>)}*/}
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
