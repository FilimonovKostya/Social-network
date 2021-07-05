import style from "../Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type HeaderProfilePropsType = {
    login: string
    logoutTC: (isAuth: boolean) => void
}

const HeaderProfile = ({login, logoutTC}: HeaderProfilePropsType) => {

    return <>
        <img src="https://pm1.narvii.com/6802/b775c9e1266f61a61737324b45e0975ed22d7328v2_hq.jpg" alt="person"/>
        <div className={style.info}>
            <h3>{login}</h3>
            {login
                ? <button className={style.btn} onClick={() => logoutTC(false)}> Logout </button>
                : <NavLink to={'/login'}> Name: {login} Login </NavLink>}

        </div>
    </>
}

export default HeaderProfile
