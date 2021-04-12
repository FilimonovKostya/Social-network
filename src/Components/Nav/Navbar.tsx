import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={style.nav}>
        <ul>
            <li><NavLink to="/profile" className={style.link} activeClassName={style.activeLink}>Profile</NavLink></li>
            <li><NavLink to="/dialogs" className={style.link} activeClassName={style.activeLink}>Dialogs</NavLink></li>
            <li><NavLink to="/news" className={style.link} activeClassName={style.activeLink}>News</NavLink></li>
            <li><NavLink to="/settings" className={style.link} activeClassName={style.activeLink}>Settings</NavLink></li>
            <li><NavLink to="/music" className={style.link} activeClassName={style.activeLink}>Music</NavLink></li>
        </ul>
    </nav>
}

export default Navbar
