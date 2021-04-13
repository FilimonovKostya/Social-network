import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = () => {

    type DialogsItemsType = {
        id: number
        name: string
    }
    const dialogs: DialogsItemsType[] = [
        {
            id: 1,
            name: 'Batman'
        },
        {
            id: 2,
            name: 'Pavel Durov'
        },
        {
            id: 3,
            name: 'Ilon Mask'
        },
        {
            id: 4,
            name: 'Den Abramov'
        },
        {
            id: 5,
            name: 'Filimonov Kostya'
        },

    ]

    const dialogsItems = dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)

    type MessageItemType = {
        id: number
        message: string
    }
    const messages: MessageItemType[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Do you like React.JS ?'},
        {id: 3, message: 'What do you think about Vue?'},
        {id: 4, message: 'Do you heard about Vanila JS ?'},
        {id: 5, message: 'React awesome!!'}
    ]

    const messagesItem = messages.map((el) => <MessageItem key={el.id} message={el.message}/>)

    return <div className={style.wrapper}>
        <div className={style.dialogs}>
            {dialogsItems}
        </div>
        <div className={style.messages}>
            {messagesItem}
        </div>
    </div>
};

export default Dialogs;
