import React from "react";
import style from './Header.module.css'
import HeaderProfile from "./HeaderProfile/HeaderProfile";

type HeaderPropsType = {
    login: string
    logoutTC: (isAuth: boolean) => void
}

const Header = ({login, logoutTC}: HeaderPropsType) => {

    return <header className={style.header}>
        <div className={style.wrapper}>
            <div className={style.avatar}>
                <HeaderProfile login={login} logoutTC={logoutTC}/>
            </div>

        </div>
        <div className={style.logo}><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="logo"/></div>
    </header>
}

export default Header
