import React from 'react';
import {UsersType} from "../../Redux/usersReducer";
import style from './Users.module.css'

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

const Users = ({users, follow, unFollow, setUsers}: UsersPropsType) => {

    if (users.length === 0) {
        setUsers([
                {id: 1, name: 'Dimych Kuzeberdin', location: {city: 'Mogilev', country: 'Belarus'}, status: 'I am a Boss', follow: true},
                {id: 2, name: 'Vasya Abdula', location: {city: 'Moscow', country: 'Russia'}, status: 'I am a Batman', follow: true},
                {id: 3, name: 'Ivanov Petrov', location: {city: 'Kiev', country: 'Ukraine'}, status: 'I am a React Developer', follow: true},
            ]
        )
    }


    return <div className={style.container}>
        {
            users.map(el => <>
                <div className={style.avatarIcon}><img src="https://sputnik.kg/images/101808/13/1018081344.jpg" alt=""/>
                    <div className={style.info}>
                        <p>{el.name}</p>
                        <p>{el.status}</p>
                    </div>
                </div>
                <div className={style.btn}>
                    {el.follow ?  <button onClick={() => follow(el.id)}> Follow</button> :  <button onClick={() => unFollow(el.id)}> un follow</button>}
                </div>
            </>)
        }
    </div>
};

export default Users;
