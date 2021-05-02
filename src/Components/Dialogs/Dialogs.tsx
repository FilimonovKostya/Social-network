import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsPage} from "../../Redux/store";

type DialogsPropsType = {
    dialogsData: DialogsPage
    addMessage: () => void
    changeMessage: (message: string) => void
    newMessageDialog: string
}
const Dialogs = ({dialogsData, newMessageDialog, addMessage, changeMessage}: DialogsPropsType) => {
    const dialogsItems = dialogsData.dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messagesItem = dialogsData.messages.map((el) => <MessageItem key={el.id} message={el.message}/>)

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => changeMessage(e.currentTarget.value)

    return <div className={style.wrapper}>
        <div className={style.dialogs}>
            {dialogsItems}
        </div>
        <div className={style.messages}>
            {messagesItem}
        </div>
        <div className={style.textArea}>
            <textarea name="" id="" cols={30} rows={10} value={newMessageDialog} onChange={onChangeMessage}/>
            <button className={style.button} onClick={addMessage}>Send</button>
        </div>
    </div>
};

export default Dialogs;
