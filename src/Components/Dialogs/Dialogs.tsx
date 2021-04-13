import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = () => {
    return <div className={style.wrapper}>
        <div className={style.dialogs}>
            <DialogItem id={1} name={'Batman'}/>
            <DialogItem id={2} name={'Pavel Durov'}/>
            <DialogItem id={3} name={'Ilon Mask'}/>
            <DialogItem id={4} name={'Den Abramov'}/>
            <DialogItem id={5} name={'Filimonov Kostya'}/>
        </div>
        <div className={style.messages}>
            <MessageItem message={'Hi'}/>
            <MessageItem message={'Do you like React.JS ?'}/>
            <MessageItem message={'What do you think about Vue?'}/>
            <MessageItem message={'Do you heard about Vanila JS ?'}/>
            <MessageItem message={'React awesome!!'}/>
        </div>
    </div>
};

export default Dialogs;
