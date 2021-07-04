import React from "react";
import {NavLink, Redirect} from "react-router-dom";
import style from './Header.module.css'

type HeaderPropsType = {
    login: string
    logoutTC: (isAuth: boolean) => void
    isAuth: boolean
}

const Header = ({login, logoutTC, isAuth}: HeaderPropsType) => {
    console.log('login', login)



    // if (isAuth) return <Redirect to={'/dialogs'}/>

    return <header className={style.header}>
        <div className={style.wrapper}>
            <div className={style.avatar}>
                <img src="https://pm1.narvii.com/6802/b775c9e1266f61a61737324b45e0975ed22d7328v2_hq.jpg" alt="person"/>
                <div className={style.info}>
                    <h3>{login}</h3>
                    {login ? <button className={style.btn} onClick={() => logoutTC(false)}> Logout </button> :
                        <NavLink to={'/login'}> Name: {login} Login </NavLink>}

                </div>
            </div>

        </div>
        <div className={style.logo}><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="logo"/></div>

    </header>
}

export default Header
