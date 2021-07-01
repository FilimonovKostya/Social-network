import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    logoutTC: (isAuth: boolean) => void

}

const Header = ({login, logoutTC}: HeaderPropsType) => {
    console.log('login', login)

    return <header className={style.header}>
        <div className={style.wrapper}>
            <div className={style.avatar}>
                <img src="https://pm1.narvii.com/6802/b775c9e1266f61a61737324b45e0975ed22d7328v2_hq.jpg" alt="person"/>
                <div className={style.info}>
                    <h3>Filimomov Kostya</h3>
                    <button className={style.btn}>Log out</button>
                </div>
            </div>

        </div>
        <div className={style.logo}><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="logo"/></div>

        {/*{login ? <button onClick={() => logoutTC(false)}> Logout  </button> : <NavLink to={'/login'}> Name: {login}  Login </NavLink>}*/}
    </header>
}

export default Header
