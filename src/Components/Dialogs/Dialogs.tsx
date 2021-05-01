import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {ActionType, DialogsPage} from "../../Redux/store";

type DialogsPropsType = {
    dialogsData: DialogsPage
    dispatch: (action: ActionType) => void
    newMessageDialog: string
}
const Dialogs = ({dialogsData, dispatch, newMessageDialog}: DialogsPropsType) => {
    const dialogsItems = dialogsData.dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messagesItem = dialogsData.messages.map((el) => <MessageItem key={el.id} message={el.message}/>)

    const onAddMessage = () => dispatch({type: 'ADD-MESSAGE'})
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch({type: 'CHANGE-MESSAGE-TEXT', message: e.currentTarget.value})

    return <div className={style.wrapper}>
        <div className={style.dialogs}>
            {dialogsItems}
        </div>
        <div className={style.messages}>
            {messagesItem}
        </div>
        <div className={style.textArea}>
            <textarea name="" id="" cols={30} rows={10} value={newMessageDialog} onChange={onChangeMessage}/>
            <button className={style.button} onClick={onAddMessage}>Send</button>
        </div>
    </div>
};

export default Dialogs;
