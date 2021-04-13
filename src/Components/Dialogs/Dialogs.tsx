import React from 'react';
import style from './Dialogs.module.css'

const Dialogs = () => {
    return <div className={style.wrapper}>
        <div className={style.dialogs}>
            <p>Batman</p>
            <p>Pavel Durov</p>
            <p>Ilon Mask</p>
            <p>Den Abramov</p>
            <p>Filimonov Kostya</p>
        </div>
        <div className={style.messages}>
            <p>Hi</p>
            <p>Do you like React.JS ?</p>
            <p>What do you think about Vue?</p>
            <p>Do you heard about Vanila JS ?</p>
            <p>React awesome!!</p>
        </div>
    </div>
};

export default Dialogs;
