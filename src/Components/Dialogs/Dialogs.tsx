import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsItemsType, MessageItemType} from "../../App";

type DialogsPropsType = {
    messages: MessageItemType[]
    dialogs: DialogsItemsType[]
}
const Dialogs = ({messages, dialogs}: DialogsPropsType) => {
    const dialogsItems = dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)
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
