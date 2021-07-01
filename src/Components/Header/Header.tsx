import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login:string
    logoutTC:(isAuth:boolean) => void

}

const Header = ({login, logoutTC}: HeaderPropsType) => {
    console.log('login', login )

    return <header className={style.header}>
        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="logo"/>
        {login ? <button onClick={() => logoutTC(false)}> Logout  </button> : <NavLink to={'/login'}> Name: {login}  Login </NavLink>}
    </header>
}

export default Header
