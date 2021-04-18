import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsPage} from "../../Redux/state";

type DialogsPropsType = {
    dialogsData:DialogsPage
}
const Dialogs = ({dialogsData}: DialogsPropsType) => {
    const dialogsItems = dialogsData.dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messagesItem = dialogsData.messages.map((el) => <MessageItem key={el.id} message={el.message}/>)

    const textAreaValue = React.createRef<HTMLTextAreaElement>()
    const onChangeTextArea = () => alert(textAreaValue.current?.value)

    return <div className={style.wrapper}>
        <div className={style.dialogs}>
            {dialogsItems}
        </div>
        <div className={style.messages}>
            {messagesItem}
        </div>
        <div className={style.textArea}>
            <textarea name="" id="" cols={30} rows={10} ref={textAreaValue}/>
            <button className={style.button} onClick={onChangeTextArea}>Send</button>
        </div>
    </div>
};

export default Dialogs;
