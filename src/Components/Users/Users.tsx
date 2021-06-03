import React, {useEffect, useState} from 'react';
import {ItemsType, UsersType} from "../../Redux/usersReducer";
import style from './Users.module.css'
import axios from "axios";

type UsersPropsType = {
    users: ItemsType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: ItemsType[]) => void
}

const Users = ({users, follow, unFollow, setUsers}: UsersPropsType) => {
    const [pagination, setPagination] = useState([1])
    const [counterPagination, setCounterPagination] = useState(1)

    useEffect(() => {

        axios.get<UsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${counterPagination}`)
            .then((response) => {
                console.log('res', response.data)
                // setUsers(response.data.items)
                console.log(response.data)
                let pages = []

                // for (let i = 0; i <= response.data.items; i++) {
                //     pages[i] = i
                //     console.log({i})
                // }
                // console.log(pages)
                // setPagination(pages)
            })
    }, [counterPagination])

    return <div className={style.container}>
        {pagination.map((el, index) => <span key={index} onClick={() => setCounterPagination(index)}>{el}</span>)}
        {/*{*/}
        {/*    users.map(el => <>*/}
        {/*        <div className={style.avatarIcon} key={el.items}><img*/}
        {/*            src={el.photos.large != null ? el.photos.large : 'https://toppng.com/uploads/preview/batman-icon-jira-avatar-11562897771zvwv8r510z.png'}*/}
        {/*            alt=""/>*/}
        {/*            <div className={style.info}>*/}
        {/*                <p>{el.name}</p>*/}
        {/*                <p>{el.status}</p>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className={style.btn}>*/}
        {/*            {el.followed ? <button onClick={() => follow(el.id)}> Follow</button> : <button onClick={() => unFollow(el.id)}> un follow</button>}*/}
        {/*        </div>*/}
        {/*    </>)*/}
        {/*}*/}
    </div>
};

export default Users;
