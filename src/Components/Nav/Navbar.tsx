import React from "react";
import style from './Navbar.module.css'

const Navbar = () => {
    return <nav className={style.nav}>
        <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/dialogs">Dialogs</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/music">Music</a></li>
        </ul>
    </nav>
}

export default Navbar
