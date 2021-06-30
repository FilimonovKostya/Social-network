import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogPageStateType} from "../../Redux/dialogsReducer";
import {useForm} from "react-hook-form";

type DialogsPropsType = {
    dialogsData: DialogPageStateType
    auth: boolean
    AddMessageAC: (message: string) => void

}


const Dialogs = ({dialogsData, auth, AddMessageAC}: DialogsPropsType) => {
    const {register, handleSubmit} = useForm<{ textarea: string }>();

    const onSubmit = handleSubmit((data) => {
        console.log('data', data)
        AddMessageAC(data.textarea)
    })

    console.log('dia auth', auth)


    const dialogsItems = dialogsData.dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messagesItem = dialogsData.messages.map((el) => <MessageItem key={el.id} message={el.message}/>)


    return <div className={style.wrapper}>
        <div className={style.dialogs}>
            {dialogsItems}
        </div>
        <div className={style.messages}>
            {messagesItem}
        </div>
        <div className={style.textArea}>
            <textarea cols={30} rows={10}  {...register('textarea')}/>
            <button className={style.button} onClick={onSubmit}>Send</button>
        </div>
    </div>
};

export default Dialogs;
