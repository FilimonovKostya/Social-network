import React from 'react';
import style from "./UserCard.module.css";
import {NavLink} from "react-router-dom";

type UserCardPropsType = {
    name: string
    status: string | null
    followed: boolean
    id: number
    photos: {
        large: string
        small: string
    }
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
    isDisabled: boolean
}

const UserCard = ({name, status, followed, id, photos, followTC, isDisabled, unFollowTC}: UserCardPropsType) => {
    return <div className={style.wrapper}>
        <div className={style.profil}>

            <div className={style.bgImage}/>
            <NavLink to={`profile/${id}`}> <img className={style.avatar}
                           src={photos.small ? photos.small : 'https://pm1.narvii.com/6802/b775c9e1266f61a61737324b45e0975ed22d7328v2_hq.jpg'} alt={name}/> </NavLink>

            <div className={style.text}>
                <div>
                    <p>Name : {name}</p>
                    <p>Status : {status}</p>
                    <p>Follow : {followed}</p>
                </div>
            </div>
            <div>
                {
                    followed
                        ? <button disabled={isDisabled} onClick={() => followTC(id)}> un follow</button>
                        : <button disabled={isDisabled} onClick={() => unFollowTC(id)}> Follow</button>
                }

            </div>

        </div>


    </div>
};

export default UserCard;
