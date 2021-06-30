import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login:string
}

const Header = ({login}: HeaderPropsType) => {

    return <header className={style.header}>
        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="logo"/>
        {login ? login : <NavLink to={'/login'}> login </NavLink>}
    </header>
}

export default Header
