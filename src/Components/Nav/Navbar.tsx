import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return <nav className={style.nav}>
        <ul>
            <li><NavLink to="/profile" className={style.link} >Profile</NavLink></li>
            <li><NavLink to="/dialogs" className={style.link} >Dialogs</NavLink></li>
            <li><NavLink to="/users" className={style.link} >Users</NavLink></li>
            <li><NavLink to="/news" className={style.link} >News</NavLink></li>
            <li><NavLink to="/settings" className={style.link} >Settings</NavLink></li>
            <li><NavLink to="/music" className={style.link} >Music</NavLink></li>
        </ul>
    </nav>
}

export default Navbar
